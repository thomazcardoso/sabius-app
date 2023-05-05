import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

 :root {
    --color-one:  #7861D8;
    --color-two: #0AB5FD;
    --color-three: #6AD0D0;
    --color-four: #6A9FD0;
    --color-five: #E3CE5E;
    --color-six: #E3765E;
    --grey-8: #000000;
    --grey-7: #868E96;
    --grey-6: #7B7B7B;
    --grey-5: #8F8E8E;
    --grey-4: #999999;
    --grey-3: #DADFE3;
    --grey-2: #999999;
    --grey-1: #FFFFFF;

    font-size: 60%;
  }

  @media (min-width: 1100px) {
    :root {
      font-size: 62.5%;
    }
  }

  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }
  body,html{
    width: 100vw;
    height: 100vh;
    color: var(--color-gray-0);
  }
  body {
    overflow-x: hidden;
  }
  body, input, button, textarea {
    font-family: 'Inter', sans-serif;
    font-size: 1.6rem;
  }
  button {
    cursor: pointer;
  }

  ::placeholder {
      font-size: 16px;
      color: var(--grey-7) !important;

      @media (max-width: 768px) {
        font-size: 12px !important;
      }
  }
`;
