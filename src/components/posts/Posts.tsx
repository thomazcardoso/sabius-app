import { PostsStyled } from "./PostsStyled";
import { AdminContext, IPost } from "../../providers/AdminContext";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

interface IPostProps {
  post: IPost;
}

export const Posts = ({ post }: IPostProps) => {
  const {openModal} = useContext(AdminContext)
  const {user} = useContext(UserContext)
  return (
    <>
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
            <button className="btnEdit" id={`${post.id}`} onClick={() => openModal("Edit")}></button>
            <button className="btnDelete" id={`${post.id}`} onClick={() => openModal("Delete")}></button>
          </div>
        </div>
      </PostsStyled>
    </>
  );
};
