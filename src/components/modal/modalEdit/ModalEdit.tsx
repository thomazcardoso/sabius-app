import { ModalEditStyled } from "./ModalEditStyled";
import { ModalBackDropStyled } from "../../../styles/ModalBackDrop";
import { useContext } from "react";
import { AdminContext, IPost } from "../../../providers/AdminContext";
import { useForm } from "react-hook-form";

export const ModalEdit = () => {
  const { closeModal, editPost, post } = useContext(AdminContext);

  const { register, handleSubmit } = useForm<IPost>();

  const submit = async (data: IPost) => {
    if (post) {
      editPost(post.id, {...data, userId: 1});
    }
  };

  return (
    <ModalBackDropStyled>
      <ModalEditStyled role="dialog">
        <div>
          <h1>Editar Post</h1>
          <button onClick={closeModal}>
            <img src="/src/assets/closemodal.svg" />
          </button>
        </div>

        <form onSubmit={handleSubmit(submit)}>
          <label>Titulo</label>
          <input
            type="text"
            placeholder="Titulo do post"
            {...register("title")}
          />

          <label>Descrição</label>
          <input
            type="text"
            placeholder="Descrição do texto"
            {...register("description")}
          />

          <label>Categoria</label>
          <input
            type="text"
            placeholder="Categoria do post"
            {...register("techCategory")}
          />

          <label>Imagem</label>
          <input
            type="text"
            placeholder="Endereço da imagem"
            {...register("postImage")}
          />

          <label>Link da biblioteca</label>
          <input
            type="text"
            placeholder="Link da biblioteca"
            {...register("link")}
          />

         

          <button type="submit">Salvar Alterações</button>
        </form>
      </ModalEditStyled>
    </ModalBackDropStyled>
  );
};
