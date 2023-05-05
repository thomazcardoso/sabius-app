import Logo from "/src/assets/Logo.svg";
import { HeaderStyled } from "./HeaderStyled";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { AdminContext } from "../../providers/AdminContext";
import { StyledMenuFilter } from "./HeaderStyled";

export const Header = () => {
  const { logout, user } = useContext(UserContext);
  const { setSearch, menu, toogleModal, setMenu } = useContext(AdminContext);
  const selectMenu = (string: string) => {
    setSearch(string)
    setMenu(false)
  }
  return (
    <>
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
        <button onClick={() => selectMenu("")}>HOME</button>
          <button onClick={() => selectMenu("react")}>REACT</button>
          <button onClick={() => selectMenu("css")}>CSS</button>
          <button onClick={() => selectMenu("html")}>HTML</button>
          <button onClick={() => selectMenu("typescript")}>TYPESCRIPT</button>
          <button onClick={() => selectMenu("javascript")}>JAVASCRIPT</button>
        </div>
      </section>

      <div className="divLogout">
        <img src={user?.image} alt="" />
        <button onClick={logout}>
          <img src="/src/assets/logout.svg" alt="" />
        </button>
      </div>

      <button className="menu-hamburguer" onClick={toogleModal}></button>
    </HeaderStyled>
    {menu ? 
        <><StyledMenuFilter>
          <button onClick={() => selectMenu("")}>TODOS</button>
          <button onClick={() => selectMenu("react")}>REACT</button>
          <button onClick={() => selectMenu("css")}>CSS</button>
          <button onClick={() => selectMenu("html")}>HTML</button>
          <button onClick={() => selectMenu("typescript")}>TYPESCRIPT</button>
          <button onClick={() => selectMenu("javascript")}>JAVASCRIPT</button>
          <button onClick={logout}>LOGOUT</button>
        </StyledMenuFilter>
        </> : null}
    </>
  );
};
