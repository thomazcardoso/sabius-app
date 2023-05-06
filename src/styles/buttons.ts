import styled from "styled-components";
import { Link } from "react-router-dom";


export const LoginButton = styled.button`
    width: 414px;
    height: 56.41px;
    background: var(--color-one);
    border: 2px solid var(--color-one);
    border-radius: 15px;
    font-family: 'Inder';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: var(--grey-1);

    @media (max-width: 768px){
        font-size: 16px;
        line-height: 20px;
        height: 38px;
        border-radius: 8px;
    }
    
    @media (max-width: 420px){
        font-size: 12px;
        line-height: 16px;
        height: 26px;
        border-radius: 5px;
    }
`

export const CadasterLinkButton = styled(Link)`
    width: 100%;
    height: 50px;
    background: #F5F5F5;
    border: 2px solid #F5F5F5;
    border-radius: 15px;
    font-family: 'Inder';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: var(--grey-4);
    text-decoration: none;
    display:flex;
    align-items: center;
    text-align: center;
    justify-content: center;

    :hover{
        transition: .4s;
        background-color: var(--color-three);
        color: var(--grey-1);
    }

    @media (max-width: 768px){
        font-size: 16px;
        line-height: 20px;
        height: 38px;
        border-radius: 8px;
    }
    
    @media (max-width: 420px){
        font-size: 12px;
        line-height: 16px;
        height: 26px;
        border-radius: 5px;
    }
`

export const BackButton = styled(Link)`
    width: 102px;
    height: 47.34px;
    background: var(--color-two);
    border-radius: 10px;
    font-family: 'Inder';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: var(--grey-1);
    text-decoration: none;
    display:flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    @media (max-width: 600px){
        font-size: 12px;
        height: 33px;
    }

`

export const CadasterButton = styled.button`
    width: 100%;
    height: 42px;
    background: var(--color-two);
    border: 2px solid var(--color-two);
    border-radius: 15px;
    font-family: 'Inder';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: var(--grey-1);

    @media (max-width: 768px){
        font-size: 16px;
        line-height: 20px;
        height: 38px;
    }
    
    @media (max-width: 420px){
        font-size: 12px;
        line-height: 16px;
        height: 26px;
    }
`