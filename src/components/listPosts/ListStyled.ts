import styled from "styled-components";

export const ListStyled = styled.ul`
  top: 75px;
  width: 90%;
  height: 560px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 15px;

  .btnAdd {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 50px;
    align-items: center;
  }

  @media (min-width: 1100px) {
    background-color: #f1f1f1;
    padding: 48px 97px 0 61px;
    overflow-y: scroll;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    ::-webkit-scrollbar {
      width: 6px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #ccc;
      border-radius: 10px;
    }
  }
`;

export const BtnStyled = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  right: 5%;
`;
