import styled from "styled-components";

export const ModalEditStyled = styled.div`
  z-index: 1;
  background-color: var(--grey-1);
  max-width: 680px;
  width: 90%;
  position: fixed;
  left: 50%;
  top: 5%;
  transform: translateX(-50%);
  border-radius: 15px;
  padding: 20px 16px 28px 22px;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  div > h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
  }

  div > button {
    background-color: transparent;
    border: none;
    width: 28px;
    height: 28px;
    position: absolute;
    top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 15px;
  }

  div > button > img {
    width: 30px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 12px;
    gap: 8px;
  }

  label {
    font-family: "Inder";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: var(--grey-7);
  }

  input {
    border: 1px solid var(--color-two);
    height: 50px;
    padding-left: 21px;
    border-radius: 8px;
    font-family: "Inder";
    font-style: normal;
    font-weight: 400;
    color: var(--grey-8);
  }

  input::placeholder {
    font-family: "Inder";
    font-style: normal;
    font-weight: 400;
    font-weight: 200;
    color: var(--grey-7);
  }

  form > button {
    background-color: var(--color-two);
    height: 50px;
    color: var(--grey-1);
    border: none;
    padding: 1rem;
    margin-top: 10px;
    border-radius: 8px;
    :hover{
      transition: 400ms;
      background-color: var(--color-four);
    }
  }

  @media (min-width: 769px) {
    padding: 47px 45px;
  }
`;
