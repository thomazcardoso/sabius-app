import styled from "styled-components";

export const StylledRegisterPage = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    max-width: 1240px;
    margin: 0 auto;

    .col-left{
        width: 100%;
        max-width: 507px;
    }

    img{
        width: 525px;
        height: 757px;
    }

    .header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 48px 16px 48px 26px;
        h1{
            font-family: 'Inder';
            font-style: normal;
            font-weight: 400;
            font-size: 32px;
            line-height: 40px;
        }
       
    }

    @media (max-width: 1024px) {
        img{
            width: 375px;
            height: 607px;
        }
    }

    @media (max-width: 768px) {
        position: relative;

        .col-left{
            position:relative;
            z-index: 3;
            & > .form {
                margin: 0 35px;
            }
        }

        img{
            position: fixed;
            width: 230px;
            height: 399px;
            right: -30px;
            bottom: -40px;
            z-index: 1;
            opacity: 0.5;
        }
        .header{
            h1{
                font-size: 18px;
            }
            a{
                width: 72px;
                height: 33px;
        }
    }
  }

`