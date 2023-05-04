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

    .img__close {
        position: absolute;
        top: 25px;
        right: 25px;
    }

    .container__content {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: flex-start;
        gap: 1rem;

        h1 {
            font-size: 64px;
        }

        h3 {
            font-size: 28px;

        }
    }

`