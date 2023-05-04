import { ListStyled } from "./ListStyled";
import { Posts } from "../posts/Posts";
import { BtnStyled } from "./ListStyled";
import { useContext } from "react";
import { AdminContext } from "../../providers/AdminContext";

export const List = () => {
  const { postsList } = useContext(AdminContext);

  return (
    <>
      <BtnStyled>
        <img src="/src/assets/add.svg" />
      </BtnStyled>
      <ListStyled>
        {postsList.map((post) => (
          <Posts key={post.id} post={post} />
        ))}
      </ListStyled>
    </>
  );
};
