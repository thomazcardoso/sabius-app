import { PostsStyled } from "./PostsStyled";
import devadm from "/src/assets/devadm.svg";
import { IPost } from "../../providers/AdminContext";

interface IPostProps {
  post: IPost;
}

export const Posts = ({ post }: IPostProps) => {
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
            <button className="btnEdit"></button>
            <button className="btnDelete"></button>
          </div>
        </div>
      </PostsStyled>
    </>
  );
};
