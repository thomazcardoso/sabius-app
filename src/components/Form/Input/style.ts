import styled from "styled-components";

export const StylledInput = styled.div`
    display: flex;
    flex-direction: column;


    label {
        font-family: 'Inder';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: var(--grey-8);
        width: 100%;
        margin-bottom: 4px;
    }

    input {
        border: 2px solid var(--color-one);
        height: 42px;
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
        margin-top: 2px;
    }

    @media (max-width: 600px) {
        label {
            font-size: 12px;
            line-height: 15px;  
            margin-bottom: 5px;
        }
        input {
            height: 26px;
            border-radius: 5px;
            padding: 0 5px;
            border-width: 1px;
        }

        p{
            font-size: 11px;
            margin-top: 2px;
        }
       
    }
`;