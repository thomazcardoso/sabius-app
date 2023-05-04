import styled from "styled-components";


export const StyleLi = styled.li`
    border: 2px solid red;

    .profile__container {
        display: flex;
        align-items: center;
        justify-content: flex-start;

        img {
            width: 37px;
            height: 37px;
            object-fit: cover;
        }

        span {
            font-size: 20px;
        }
    }

`