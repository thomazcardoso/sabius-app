import { ModalBackDropStyled } from "../../../styles/ModalBackDrop";
import { ModalDeleteStyled } from "./ModalDeleteStyled";

export const ModalDelete = () => {
  return (
    <ModalBackDropStyled>
      <ModalDeleteStyled>
        <h1>Deletar Post</h1>

        <button className="btnCloseModal">
          <img src="/src/assets/closemodal.svg" />
        </button>

        <p>Deseja excluir realmente o post?</p>

        <button className="btnDelete">Excluir</button>
        <button className="btnCancel">Cancelar</button>
      </ModalDeleteStyled>
    </ModalBackDropStyled>
  );
};
