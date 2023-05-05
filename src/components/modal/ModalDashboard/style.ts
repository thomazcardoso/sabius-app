import styled from "styled-components";


export const StyledContainerModal = styled.div`
    max-width: 1000px;
    max-height: 500px;
    width: 100%;
    height: 100%;
    padding: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    margin-top: 30px;
    position: relative;
    background-color: var(--grey-1);
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    .img__close {
        position: absolute;
        top: 25px;
        right: 25px;
    }

    .container__content {
        padding: 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: flex-start;
        gap: 1.5rem;

        h1 {
            font-size: 64px;
            font-family: 'Inter', sans-serif;
        }

        h3 {
            font-size: 28px;
            font-size: 28px;
            color: var(--grey-5);
            font-weight: 400;
            font-family: 'Inder', sans-serif;
            margin-left: 1rem;
            margin-top: 1rem;
        }

        p {
            font-family: 'Inder', sans-serif;
            font-size: 24px;
            margin-left: 1rem;
        }

        a {
            font-family: 'Inder', sans-serif;
            font-size: 18px;
            color: var(--color-two);
            margin-left: 1rem;
            margin-top: 2rem;
        }

        .controlls__container--modal {
            margin-left: 1rem;
            margin-top: 2rem;
            display: flex;
            align-items: center;
            gap: 1rem;

            .like__modal {
                width: 40px;
                height: 40px;
                margin-top: 0.5rem;
            }
        }
    }

    @media (max-width: 1060px) {
        max-width:900px;
    }

    @media (max-width: 960px) {
        max-width:700px;
    }

    @media (max-width: 760px) {
        max-width:600px;

        h1 {
            font-size: 50px;
        }

        h3 {
            font-size: 20px;
        }

        p {
            font-size: 18px;
        }
    }

    @media (max-width: 660px) {
        max-width: 500px;
        padding: 40px;
        .container__content {
            h1 {
                font-size: 50px;
            }

            h3 {
                font-size: 18px;
            }

            p {
                font-size: 16px;
            }

            a {
                font-size: 16px;
            }
        }
    }

    @media (max-width: 560px) {
        max-width: 400px;
        max-height: 400px;
        padding: 30px;

        .img__close {
            right: 15px;
        }

        .container__content {
            h1 {
                font-size: 38px;
            }

            h3 {
                font-size: 16px;
                font-weight: 600;
                margin-top: 0.5rem;
            }

            p {
                font-size: 16px;
            }

            a {
                font-size: 16px;
                margin-top: 0.5rem;
            }
        }

    @media (max-width: 460px) {
            max-width: 300px;

            .container__content {
                h1 {
                    width: 80%;
                    font-size: 28px;
                    margin-left: 0;
                }

                h3 {
                    margin-left: 0;
                }

                p {
                    margin-left: 0;
                }

                a {
                    font-size: 12px;
                    width: 50%;
                    margin-left: 0;
                }
            }

            .controlls__container--modal {
                
                .fav__modal {
                    width: 40px;
                }

                .like__modal {
                    width: 10px;
                }
            }
        }
    }

    @media (max-width: 360px) {
        max-width: 250px;
        padding: 25px;

        .img__close {
            width: 25px;
        }

        .container__content {
            padding: 0;

            h1 {
                width: 50%;
                font-size: 24px;
                margin-top: 0.5rem;
            }

            p {
                width: 50%;
            }

            a {
                width: 100%;
            }
        }

        .controlls__container--modal {
            margin-bottom: 1rem;
            margin-left: 0;

            .fav__modal {
                    width: 45px;
                }
        }

    }


`