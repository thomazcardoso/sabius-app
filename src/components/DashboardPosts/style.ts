import styled from "styled-components";


export const StyledUl = styled.ul`
    padding: 40px;
    
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.7rem;

    @media (max-width: 1150px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 970px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5rem;
    }

`