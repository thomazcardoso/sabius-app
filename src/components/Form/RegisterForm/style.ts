import styled from "styled-components";

export const StylledRegisterForm = styled.div`
    border: 1px solid var(--color-two);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    padding: 35px 30px;
    background-color: var(--grey-1);
    width: 100%;
    max-width: 510px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 100px;

    form{
        width: 100%;
    }

    button{
        margin-top: 30px;
        width: 100%;

        :hover{
            transition: 400ms;
            opacity: 80%;
            border: 2px solid var(--color-two);
            transform: scale(102%);
        }
    }
    
    input{
        border-color: var(--color-two) !important;
        color: var(--grey-7) !important;
    }

    label{
        color: var(--grey-7) !important;
        margin-bottom: 15px;
    }

    & > h2{
        font-family: 'Inder';
        font-style: normal;
        font-weight: 400;
        font-size: 28px;
        line-height: 35px;
        color: var(--grey-6);
    }

    & > p{
        font-family: 'Inder';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: var(--grey-4);
        margin-top: 8px;
        margin-bottom: 45px;
    }

    @media (max-width: 600px){
        padding: 32px 30px 39px 20px;

        & > h2,
        & > p{
            display: none;
        }

        label{
            margin-bottom: 5px;
        }
    }

`