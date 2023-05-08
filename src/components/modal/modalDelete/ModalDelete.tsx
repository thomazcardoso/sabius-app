import { useContext } from "react";
import { ModalBackDropStyled } from "../../../styles/ModalBackDrop";
import { ModalDeleteStyled } from "./ModalDeleteStyled";
import { AdminContext } from "../../../providers/AdminContext";

export const ModalDelete = () => {
  const { closeModal, post, deletePost } = useContext(AdminContext);

  return (
    <ModalBackDropStyled>
      <ModalDeleteStyled>
        <h1>Deletar Post</h1>

        <button className="btnCloseModal" onClick={closeModal}>
          <img src="/src/assets/closemodal.svg" />
        </button>

        <p>Deseja excluir realmente o post?</p>

        <button
          className="btnDelete"
          onClick={() => {
            post ? deletePost(post.id) : null;
          }}
        >
          Excluir
        </button>
        <button className="btnCancel" onClick={closeModal}>
          Cancelar
        </button>
      </ModalDeleteStyled>
    </ModalBackDropStyled>
  );
};
