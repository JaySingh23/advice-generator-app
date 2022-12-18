import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    * {
        box-sizing: border-box;
    }

    body {
        font-family: 'Quicksand', sans-serif;
        font-size: 1.15em;
        margin: 0;
    }

    p {
        color: white;
        font-weight: 700;
        text-align: center;
        font-size: 1.25em;
        letter-spacing: 0.02em;
    }
`