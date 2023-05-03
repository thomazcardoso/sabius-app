import Logo from "/src/assets/Logo.svg";
import { HeaderStyled } from "./HeaderStyled";

export const Header = () => {
  return (
    <HeaderStyled>
      <div>
        <img src={Logo} alt="Logo do Blog Sabius" />
        <h1>S A B I U S</h1>
      </div>

      <section>
        <div className="searchContainer">
          <input type="text" placeholder="Faça sua busca..." />

          <button>
            <img src="/src/assets/lupa.svg" alt="" />
          </button>
        </div>

        <div className="containerBtn">
          <button>REACT</button>
          <button>CSS</button>
          <button>HTML</button>
          <button>TYPESCRIPT</button>
          <button>JAVASCRIPT</button>
        </div>
      </section>

      <div className="divLogout">
        <img src="/src/assets/devadm.svg" alt="" />
        <button>
          <img src="/src/assets/logout.svg" alt="" />
        </button>
      </div>

      <button className="menu-hamburguer"></button>
    </HeaderStyled>
  );
};
