import { ModalCreateStyled } from "./ModalCreateStyled";
import { ModalBackDropStyled } from "../../../styles/ModalBackDrop";
import { useContext } from "react";
import { AdminContext } from "../../../providers/AdminContext";
import { useForm } from "react-hook-form";
import { IPost } from "../../../providers/AdminContext";

export const ModalCreate = () => {
  const { closeModal, createPost } = useContext(AdminContext);

  const { register, handleSubmit } = useForm<IPost>({});

  const submit = async (data: IPost) => {
    createPost({...data, userId: 1});
  };

  return (
    <ModalBackDropStyled>
      <ModalCreateStyled role="dialog">
        <div>
          <h1>Criar novo post</h1>
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

          <button type="submit">Criar post</button>
        </form>
      </ModalCreateStyled>
    </ModalBackDropStyled>
  );
};
