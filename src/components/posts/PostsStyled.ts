import styled from "styled-components";

export const PostsStyled = styled.li`
  @import url("https://fonts.googleapis.com/css2?family=Inder&display=swap");
  border-radius: 15px;
  margin-bottom: 46px;

  list-style: none;
  h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 3.2rem;
    line-height: 30px;
  }

  img{
    width: 27px;
    height: 27px;
    border-radius: 50%;
  }

  p {
    margin-bottom: 26px;
    margin-left: 13px;
    font-family: "Inder", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
  }

  .infoContainer {
    display: none;
  }

  .btnDiv {
    display: flex;
    justify-content: space-between;
  }

  .btnEdit {
    background-image: url("/src/assets/edit.svg");
    width: 34px;
    height: 34px;
    border: none;
    background-color: transparent;
    margin-left: 13px;
  }

  .btnDelete {
    background-image: url("/src/assets/delete.svg");
    width: 34px;
    height: 34px;
    border: none;
    background-color: transparent;
  }

  .postContainer {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    padding-top: 28px;
    padding-right: 28px;
    padding-bottom: 19px;
    padding-left: 23px;
    border-radius: 15px;
  }

  .react {
    background-color: var(--color-three);
  }

  .html {
    background-color: var(--color-six);
  }

  .css {
    background-color: var(--color-one);
  }

  .javascript {
    background-color: var(--color-five);
  }

  .typescript {
    background-color: var(--color-four);
  }

  @media (min-width: 1100px) {
    display: flex;
    flex-direction: column;


    .postContainer {
      padding-bottom: 16px;
    }

    .infoContainer {
      display: flex;
      align-items: center;
    }

    .infoDiv {
      display: flex;
      justify-content: space-around;
      align-items: center;
      gap: 16px
    }

    .infoDiv > p {
      font-family: "Inder";
      font-style: normal;
      font-weight: 400;
      font-size: 28px;
    }

    .btnDiv {
      display: flex;
    }

    .btnEdit {
      position: absolute;
      top: 23px;
      right: 28px;
    }

    .btnDelete {
      position: absolute;
      bottom: 25px;
      right: 28px;
    }

    p {
      margin: 0;
    }

    .postText {
      width: 90%;
    }
  }
`;
