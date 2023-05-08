import { PostsStyled } from "./PostsStyled";
import { AdminContext, IPost } from "../../providers/AdminContext";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

import edit from "../../assets/edit.svg";
import delet from "../../assets/delete.svg";

interface IPostProps {
  post: IPost;
}

export const Posts = ({ post }: IPostProps) => {
  const { deleteCard, editCard } = useContext(AdminContext);
  const { user } = useContext(UserContext);

  return (
    <PostsStyled>
      <div className={`postContainer ${post.techCategory.toLowerCase()}`}>
        <div className="infoContainer">
          <div className="infoDiv">
            <img src={user?.image} alt="" />
            <p>{user?.name}</p>
            <span>|</span>
            <p>{post.techCategory}</p>
          </div>
        </div>

        <h1>{post.title}</h1>

        <p className="postText">{post.description}</p>

        <div className="btnDiv">
          <button
            className="btnEdit"
            onClick={() => editCard(post.id)}
          ><img src={edit}/></button>
          <button
            className="btnDelete"
            onClick={() => deleteCard(post.id)}
          ><img src={delet} /></button>
        </div>
      </div>
    </PostsStyled>
  );
};
