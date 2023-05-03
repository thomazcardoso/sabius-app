import { ListStyled } from "./ListStyled";
import { Posts } from "../posts/Posts";
import { BtnStyled } from "./ListStyled";
import { useContext } from "react";
import { AdminContext } from "../../providers/AdminContext";

export const List = () => {
  const { openModal } = useContext(AdminContext);

  return (
    <>
      <BtnStyled onClick={openModal}>
        <img src="/src/assets/add.svg" />
      </BtnStyled>
      <ListStyled>
        <Posts />
      </ListStyled>
    </>
  );
};
