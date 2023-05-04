import styled from "styled-components";

export const StylledRegisterForm = styled.div`
    border: 1px solid var(--color-two);
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
    
    input{
        border-color: var(--color-two);
    }

    label{
        color: var(--grey-7);
        margin-bottom: 5px;
        
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

`