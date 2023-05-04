import { PostsStyled } from "./PostsStyled";
import devadm from "/src/assets/devadm.svg";
import { AdminContext, IPost } from "../../providers/AdminContext";
import { useContext } from "react";

interface IPostProps {
  post: IPost;
}

export const Posts = ({ post }: IPostProps) => {
  const {openModal} = useContext(AdminContext)
  return (
    <>
      <PostsStyled className={post.techCategory === "REACT" ? "react" : "html"}>
        <div className="postContainer">
          <div className="infoContainer">
            <div className="infoDiv">
              <img src={devadm} alt="" />
              <p>Name Adm</p>
              <span>|</span>
              <p>{post.techCategory}</p>
            </div>
          </div>

          <h1>{post.title}</h1>

          <p className="postText">{post.description}</p>

          <div className="btnDiv">
            <button className="btnEdit" id={`${post.id}`} onClick={openModal}></button>
            <button className="btnDelete" id={`${post.id}`} onClick={openModal}></button>
          </div>
        </div>
      </PostsStyled>
    </>
  );
};
