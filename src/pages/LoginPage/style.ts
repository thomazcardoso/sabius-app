import styled from "styled-components";

export const StylledLoginPage = styled.div`
    background-color: var(--grey-3);
    width: 100vw;
    height: 110vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;

    img{
        width: 195px;
        height: 140px;
    }

    h1{
        margin-top: 25px;
        margin-bottom: 35px;
        font-weight: 400;
        font-size: 32px;
        line-height: 40px;
    }

    @media (max-width: 768px) {
        height: auto;
        min-height: 100vh;
        
        img{
            width: 145px;
            height: 112px;
        }

        h1{
            margin-top: 20px;
            margin-bottom: 30px;
        }
    }
    
    @media (max-width: 420px) {
        img{
            width: 105px;
            height: 72px;
        }

        h1{
            margin-top: 16px;
            margin-bottom: 29px;
            font-size: 18px;
            line-height: 22px;
        }
    }
`