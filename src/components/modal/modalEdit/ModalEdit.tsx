import { ModalEditStyled } from "./ModalEditStyled";
import { ModalBackDropStyled } from "../../../styles/ModalBackDrop";

export const ModalEdit = () => {
  return (
    <ModalBackDropStyled>
      <ModalEditStyled role="dialog">
        <div>
          <h1>Editar Post</h1>
          <button>
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
