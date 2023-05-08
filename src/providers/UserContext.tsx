import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";

export interface IUser {
  name: string;
  email: string;
  password: string;
  image: string;
  id: number;
  isAdmin?: boolean;
}

interface IRegisterFormData {
  name: string;
  email: string;
  password: string;
  image: string;
}

interface ILoginFormData {
  email: string;
  password: string;
}

interface IUserResponse {
  accessToken: string;
  user: IUser;
}

interface IUserProviderProps {
  children: React.ReactNode;
}

interface IUserContext {
  user: IUser | null;
  registerUser: (formData: IRegisterFormData) => Promise<void>;
  login: (formData: ILoginFormData) => Promise<void>;
  logout: () => void;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [ loading, setLoading ] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN:SABIUS");
    const userId = localStorage.getItem("@USERID:SABIUS");
    const autoUserLogin = async () => {
    
      try {
        api.defaults.headers.common.Authorization = `Bearer ${token}`;
        setLoading(true)
        const { data } = await api.get<IUser>(`/users/${userId}`);
        setUser(data);
        if (data.isAdmin) {
          navigate(`/admin`);
        } else {
          navigate(`/dashboard`);
        }
      } catch (error) {
        console.log(error);
        localStorage.removeItem("@TOKEN:SABIUS");
        localStorage.removeItem("@USERID:SABIUS");
      } finally {
        setLoading(false);
      }
    };
    if (token && userId) {
      autoUserLogin();
    }
  }, []);
  
  const registerUser = async (formData: IRegisterFormData) => {
    try {
      setLoading(true)
      await api.post<IUserResponse>("/register", formData);
      toast.success("Usuário registrado com sucesso!")
      navigate("/");
    } catch (error) {
      toast.warn("Usuário não cadastrado!")
      console.log(error);
    } finally {
      setLoading(false)
    }
  };
  
  const login = async (formData: ILoginFormData) => {
    try {
      setLoading(true)
      const { data } = await api.post<IUserResponse>("/login", formData);
      localStorage.setItem("@TOKEN:SABIUS", data.accessToken);
      localStorage.setItem("@USERID:SABIUS", JSON.stringify(data.user.id));
      setUser(data.user);
      toast.success(`Olá, ${data.user.name}!`)
      if (data.user.isAdmin) {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }
    } catch (error) {
      toast.warn("Login não realizado!")
      console.log(error);
    } finally {
      setLoading(false)
    }
  };
  
  const logout = () => {
    localStorage.removeItem("@TOKEN:SABIUS");
    localStorage.removeItem("@USERID:SABIUS");
    setUser(null);
    navigate("/");
  };

  return (
    <UserContext.Provider value={{ user, registerUser, login, logout, setLoading, loading }}>
      {children}
    </UserContext.Provider>
  );
};
