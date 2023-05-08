import styled from "styled-components";

export const ModalDeleteStyled = styled.div`
  background-color: var(--grey-1);
  max-width: 680px;
  width: 90%;
  position: fixed;
  display: flex;
  flex-direction: column;
  padding: 28px 30px 38px 30px;
  left: 50%;
  top: 30%;
  transform: translateX(-50%);
  border-radius: 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 200;
    font-size: 32px;
  }

  .btnCloseModal {
    border: none;
    background-color: transparent;
    position: absolute;
    top: 10px;
    right: 16px;
  }

  button > img {
    width: 28px;
  }

  p {
    font-family: "Inder";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: var(--grey-7);
    margin-top: 30px;
    width: 100%;
  }

  .btnDelete,
  .btnCancel {
    border: none;
    cursor: pointer;
    color: var(--grey-1);
    height: 56px;
    border-radius: 8px;

   
  }

  .btnDelete {
    background-color: var(--color-six);
    margin-top: 40px;
    :hover{
      transition: 400ms;
      opacity: 80%;
    }
  }

  .btnCancel {
    background-color: var(--color-two);
    margin-top: 12px;
    :hover{
      transition: 400ms;
      opacity: 80%;
    }
  }
`;
