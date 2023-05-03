import Input from "../Input";
import { useContext, useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TRegisterFormValues, registerFormShema } from "../../../validations/registerFormSchema";
import { UserContext } from "../../../providers/UserContext";

export const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const { registerUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterFormValues>({
    resolver: zodResolver(registerFormShema),
  });

  const submit: SubmitHandler<TRegisterFormValues> = (formData) => {
    registerUser(formData);
  };
  return (
    <form onSubmit={handleSubmit(submit)}>
      <Input
        type="name"
        placeholder="Seu nome"
        {...register("name")}
        id="name"
        disabled={loading}
        error={errors.name}
      />
      <Input
        type="email"
        placeholder="Seu email"
        {...register("email")}
        id="email"
        disabled={loading}
        error={errors.email}
      />
      <Input
        type="password"
        placeholder="Senha"
        {...register("password")}
        id="password"
        disabled={loading}
        error={errors.password}
      />
      <Input
        type="password"
        placeholder="Confirmar senha"
        {...register("confirm")}
        id="confirmPassword"
        disabled={loading}
        error={errors.confirm}
      />
            <Input
        type="text"
        placeholder="Coloque sua URL"
        {...register("image")}
        id="image"
        disabled={loading}
        error={errors.image}
      />
      <button
        disabled={loading}
      >
        {loading ? "Entrando..." : "Entrar"}
      </button>
    </form>
  );
};
