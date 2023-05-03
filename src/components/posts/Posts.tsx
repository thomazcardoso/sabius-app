import { PostsStyled } from "./PostsStyled";
import devadm from "/src/assets/devadm.svg";

export const Posts = () => {
  return (
    <>
      <PostsStyled>
        <div className="postContainer react">
          <div className="infoContainer">
            <div className="infoDiv">
              <img src={devadm} alt="" />
              <p>Name Adm</p>
              <span>|</span>
              <p>Tech Name</p>
            </div>
          </div>

          <h1>Title Post</h1>

          <p className="postText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            quae commodi libero inventore. Vel sunt sapiente possimus minima,
            adipisci cupiditate totam in? Eos et amet ratione ipsa tenetur,
            minima facere.
          </p>

          <div className="btnDiv">
            <button className="btnEdit"></button>
            <button className="btnDelete"></button>
          </div>
        </div>
      </PostsStyled>

      <PostsStyled>
        <div className="postContainer javascript">
          <div className="infoContainer">
            <div className="infoDiv">
              <img src={devadm} alt="" />
              <p>Name Adm</p>
              <span>|</span>
              <p>Tech Name</p>
            </div>
          </div>

          <h1>Title Post</h1>

          <p className="postText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            quae commodi libero inventore. Vel sunt sapiente possimus minima,
            adipisci cupiditate totam in? Eos et amet ratione ipsa tenetur,
            minima facere.
          </p>

          <div className="btnDiv">
            <button className="btnEdit"></button>
            <button className="btnDelete"></button>
          </div>
        </div>
      </PostsStyled>

      <PostsStyled>
        <div className="postContainer typescript">
          <div className="infoContainer">
            <div className="infoDiv">
              <img src={devadm} alt="" />
              <p>Name Adm</p>
              <span>|</span>
              <p>Tech Name</p>
            </div>
          </div>

          <h1>Title Post</h1>

          <p className="postText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            quae commodi libero inventore. Vel sunt sapiente possimus minima,
            adipisci cupiditate totam in? Eos et amet ratione ipsa tenetur,
            minima facere.
          </p>

          <div className="btnDiv">
            <button className="btnEdit"></button>
            <button className="btnDelete"></button>
          </div>
        </div>
      </PostsStyled>

      <PostsStyled>
        <div className="postContainer css">
          <div className="infoContainer">
            <div className="infoDiv">
              <img src={devadm} alt="" />
              <p>Name Adm</p>
              <span>|</span>
              <p>Tech Name</p>
            </div>
          </div>

          <h1>Title Post</h1>

          <p className="postText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            quae commodi libero inventore. Vel sunt sapiente possimus minima,
            adipisci cupiditate totam in? Eos et amet ratione ipsa tenetur,
            minima facere.
          </p>

          <div className="btnDiv">
            <button className="btnEdit"></button>
            <button className="btnDelete"></button>
          </div>
        </div>
      </PostsStyled>

      <PostsStyled>
        <div className="postContainer html">
          <div className="infoContainer">
            <div className="infoDiv">
              <img src={devadm} alt="" />
              <p>Name Adm</p>
              <span>|</span>
              <p>Tech Name</p>
            </div>
          </div>

          <h1>Title Post</h1>

          <p className="postText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            quae commodi libero inventore. Vel sunt sapiente possimus minima,
            adipisci cupiditate totam in? Eos et amet ratione ipsa tenetur,
            minima facere.
          </p>

          <div className="btnDiv">
            <button className="btnEdit"></button>
            <button className="btnDelete"></button>
          </div>
        </div>
      </PostsStyled>
    </>
  );
};
