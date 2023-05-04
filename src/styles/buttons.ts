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
`

export const CadasterLinkButton = styled(Link)`
    width: 100%;
    height: 56.41px;
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
`

export const CadasterButton = styled.button`
    width: 100%;
    height: 56.41px;
    background: var(--color-two);
    border: 2px solid var(--color-two);
    border-radius: 15px;
    font-family: 'Inder';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: var(--grey-1);
`