import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: 'Inter', sans-serif;
    }

    body{
        width: 100%;
        height: 100%;
        background-color: var(--color-grey-4);
    }

    #root{
        width: 100%;
        height: 100%
    }

    .App{
        width: 100%;
        height: 100%
    }

    button{
        cursor: pointer;
    }

    input{
        border: none;
    }


    img{
        width: 100%;
    }

    :root {
        --color-primary: #B81FEB;
        --color-primary-hover: #5C2E6B;

        --color-grey-4: #121214;
        --color-grey-3: #212529;
        --color-grey-2: #343B41;
        --color-grey-1: #868E96;
        --color-grey-0: #F8F9FA;

        --color-sucess: #3FE864;
        --color-negative: #E83F5B;

        
        --toastify-color-dark: var(--color-grey-3);
        --toastify-text-color-dark: var(--color-grey-0);

        --toastify-color-success: var(--color-sucess);
        --toastify-icon-color-success: var(--color-sucess);

        --toastify-color-error: var(--color-negative);
        --toastify-icon-color-error: var(--color-negative);
    }
`;
