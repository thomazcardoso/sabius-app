import styled from "styled-components";

export const StylledInput = styled.div`

    display: flex;
    flex-direction: column;
    margin-bottom: 15px;

    label {
        font-family: 'Inder';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: var(--grey-8);
        width: 100%;
        margin-bottom: 9px;
    }

    input {
        
        border: 2px solid var(--color-one);
        height: 56px;
        padding-left: 21px;
        border-radius: 15px;
        font-family: "Inder";
        font-style: normal;
        font-weight: 400;
        color: var(--color-one);
        width: 100%;
    }

    input::placeholder {
        font-family: "Inder";
        font-style: normal;
        font-weight: 400;
        font-weight: 200;
        color: var(--grey-7);
    }

    p{
        color: red;
    }

    @media (min-width: 769px) {
       
    }
`;