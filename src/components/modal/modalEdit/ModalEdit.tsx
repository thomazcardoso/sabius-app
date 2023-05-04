import { ModalEditStyled } from "./ModalEditStyled";
import { ModalBackDropStyled } from "../../../styles/ModalBackDrop";
import { useContext } from "react";
import { AdminContext } from "../../../providers/AdminContext";

export const ModalEdit = () => {
  const {closeModal} = useContext(AdminContext)
  return (
    <ModalBackDropStyled>
      <ModalEditStyled role="dialog">
        <div>
          <h1>Editar Post</h1>
          <button onClick={closeModal}>
            <img src="/src/assets/closemodal.svg" />
          </button>
        </div>

        <form>
          <label>Titulo</label>
          <input type="text" placeholder="Titulo do post" />

          <label>Descrição</label>
          <input type="text" placeholder="Descrição do texto" />

          <label>Categoria</label>
          <input type="text" placeholder="Categoria do post" />

          <label>Imagem</label>
          <input type="url" placeholder="Endereço da imagem" />

          <label>Link da biblioteca</label>
          <input type="url" placeholder="Link da biblioteca" />

          <button>Salvar Alterações</button>
        </form>
      </ModalEditStyled>
    </ModalBackDropStyled>
  );
};
