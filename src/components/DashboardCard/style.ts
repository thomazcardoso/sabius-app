import styled from "styled-components";

export const StyleLi = styled.li`
  width: 442px;
  border-radius: 15px;
  .div__styled {
    width: 100%;
    height: 100%;
    padding: 25px 30px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
    border-radius: 15px;

  }

  h1 {
    font-family: "Inter", sans-serif;
    font-size: 64px;
  }

  .profile__container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;

    img {
      width: 37px;
      height: 37px;
      border-radius: 100%;
      object-fit: cover;
    }

    span {
      font-size: 20px;
      font-family: "Inder", sans-serif;
    }
  }

  p {
    font-family: "Inder", sans-serif;
    font-size: 20px;
  }

  .post__img {
    width: 100%;
    padding: 25px;
    height: 273px;
    object-fit: contain;
    border-radius: 15px;
  }

  .controlls__container {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1rem;

    .btn_two {
      margin-bottom: 5px;
    }

    .btn_three {
      width: 40px;
    }

  }

  :hover{
    transition: 500ms;
    transform: scale(102%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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

  @media (max-width: 970px) {
    width: 100%;

    .div__styled {
      gap: 2.5rem;
    }

    .post__img {
      display: none;
    }

    .controlls__container {
      justify-content: space-evenly;
        
    }

  }

  @media (max-width: 520px) {

    h1 {
      font-size: 50px;
    }

    .profile__container {
      display: none;
    }
  }

  @media (max-width: 430px) {
    h1 {
      font-size: 36px;
    }

    .controlls__container > img {
      width: 40px;
    }
  }

  @media (max-width: 340px) {
    h1 {
      font-size: 26px;
    }
  }

`;
