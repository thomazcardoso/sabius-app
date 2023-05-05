import styled from "styled-components";

export const ListStyled = styled.ul`
  width: 90%;
  max-height: 700px;
  margin: 0 auto;

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
    border-radius: 8px;
    ::-webkit-scrollbar {
      width: 8px;
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
  margin: 16px 0;
`;

export const StyledSection = styled.section`
    width: 100%;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    .divButtonAdd{
      padding: 0 5%;
      display: flex;
      flex-direction: row-reverse;
    }
`