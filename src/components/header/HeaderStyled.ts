import styled from "styled-components";

export const HeaderStyled = styled.header`
  @import url("https://fonts.googleapis.com/css2?family=Inder&display=swap");

  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  height: 153px;
  width: 100%;
  align-items: center;
  padding: 0 5% 0 5%;
  margin: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 65px;
    width: 175px;
  }

  div > img {
    height: 55px;
    width: 83px;
  }

  div > h1 {
    font-style: normal;
    font-family: "Inder", sans-serif;
    font-weight: 400;
    font-size: 20px;
    width: 192px;
    height: 45px;
    display: flex;
    align-items: center;
    line-height: 40px;
    padding-top: 10px;
  }

  .menu-hamburguer {
    border: none;
    background-image: url("/src/assets/menu-hamburguer.svg");
    background-repeat: no-repeat;
    width: 38px;
    height: 42px;
    background-color: transparent;
  }

  section {
    display: none;
  }
  

  .divLogout {
    display: none;
  }

  @media (min-width: 1100px) {
    section {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .containerBtn {
      display: flex;
      justify-content: space-between;
      padding: 0 60px 0 60px;
      width: 593px;
      position: relative;
      top: 20px;
    }

    .containerBtn > input {
      width: 100%;
    }

    .containerBtn > button {
      background-color: transparent;
      border: none;
      color: var(--grey-5);
      font-family: "Inder";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
    }

    .menu-hamburguer {
      display: none;
    }

    .divLogout {
      display: flex;
      margin-right: 25px;
      justify-content: space-between;
    }

    .divLogout > button {
      width: 61px;
      height: 53.39px;
      background-color: transparent;
      border: none;
    }

    .searchContainer {
      width: 593px;
      height: 41px;
      border-radius: 15px;
      position: relative;
      align-items: center;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      top: 28px;
    }

    .searchContainer > input {
      width: 100%;
      height: 100%;
      border-radius: 15px;
      border: 2px solid var(--grey-8);
      padding-left: 23px;
      font-family: "Inder";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      color: var(--grey-8);
    }

    .searchContainer > button {
      border: none;
      background-color: transparent;
      position: absolute;
      z-index: 1;
      right: 0;
      padding-right: 40px;
      cursor: pointer;
      width: 27px;
      height: 27px;
      top: 7px;
    }
  }
`;
