import styled from "styled-components";

export const StylledLoginForm = styled.div`
    border: 1px solid var(--color-one);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    padding: 30px 35px;
    background-color: var(--grey-1);
    width: 100%;
    max-width: 510px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    button{
        width: 100%;
        height: 42px;
        margin-top: 8px;

        :hover{
            transition: .4s;
            opacity: 90%;
            transform: scale(102%);
        }
    }

    & > p{
        margin: 12px 0;
        color: var(--grey-4);
        font-family: 'Inder';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
    }

    @media (max-width: 768px) {
        padding: 35px 30px;
    }
    
    @media (max-width: 420px) {
        padding: 30px 25px;

        & > p {
            font-size: 12px;
            line-height: 15px;
            margin: 15px 0;
        }
    }
`