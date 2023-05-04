import styled from "styled-components";

export const StylledLoginForm = styled.div`
    border: 1px solid var(--color-one);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    padding: 50px 45px;
    background-color: var(--grey-1);
    width: 100%;
    max-width: 510px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form{
        width: 100%;
    }

    button{
        width: 100%;
    }

    & > p{
        margin: 25px 0;
        color: var(--grey-4);
        font-family: 'Inder';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
    }


`