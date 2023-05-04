import { ListStyled } from "./ListStyled";
import { Posts } from "../posts/Posts";
import { BtnStyled } from "./ListStyled";
import { useContext } from "react";
import { AdminContext } from "../../providers/AdminContext";

export const List = () => {
  const { postsList, openModal, search, filterSearch } =
    useContext(AdminContext);
  const currentPost = search !== "" ? filterSearch : postsList;
  return (
    <>
      <BtnStyled onClick={() => openModal("Create")}>
        <img src="/src/assets/add.svg" />
      </BtnStyled>
      <ListStyled>
        {currentPost.map((post) => (
          <Posts key={post.id} post={post} />
        ))}
      </ListStyled>
    </>
  );
};
