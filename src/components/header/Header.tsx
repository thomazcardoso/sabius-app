import Logo from "/src/assets/Logo.svg";
import { HeaderStyled } from "./HeaderStyled";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { AdminContext } from "../../providers/AdminContext";

export const Header = () => {
  const { logout, user } = useContext(UserContext);
  const { setSearch } = useContext(AdminContext);
  return (
    <HeaderStyled>
      <div>
        <img src={Logo} alt="Logo do Blog Sabius" />
        <h1>S A B I U S</h1>
      </div>

      <section>
        <form className="searchContainer">
          <input
            type="text"
            placeholder="Faça sua busca..."
            onChange={(e) => setSearch(e.target.value)}
          />

          <button>
            <img src="/src/assets/lupa.svg" alt="" />
          </button>
        </form>

        <div className="containerBtn">
          <button onClick={() => setSearch("react")}>REACT</button>
          <button onClick={() => setSearch("css")}>CSS</button>
          <button onClick={() => setSearch("html")}>HTML</button>
          <button onClick={() => setSearch("typescript")}>TYPESCRIPT</button>
          <button onClick={() => setSearch("javascript")}>JAVASCRIPT</button>
        </div>
      </section>

      <div className="divLogout" onClick={logout}>
        <img src={user?.image} alt="" />
        <button>
          <img src="/src/assets/logout.svg" alt="" />
        </button>
      </div>

      <button className="menu-hamburguer"></button>
    </HeaderStyled>
  );
};
