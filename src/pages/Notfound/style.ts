import styled from 'styled-components';

export const StyledNotPage = styled.div`
    display: flex;
    gap: 5rem;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    div {

        display: flex;
        flex-direction: column;
        gap: 1rem;

        h1 {
            font-family: 'Inder', sans-serif;
            text-align: flex-start;
            width: 550px;
            font-size: 62px;
        }

        a {
            width: 80%;
            font-size: 20px;
            text-align: center;
            padding: 15px 20px;
            border-radius: 10px;
            color: var(--grey-1);
            background-color: var(--color-one);

            :hover {
                transition: .4s;
                background-color: var(--color-two);
                color: var(--grey-1);
            }
        }

    }


    img {
        width: 690px;
        height: 690px;
        margin-right: -10rem;
    }
`
