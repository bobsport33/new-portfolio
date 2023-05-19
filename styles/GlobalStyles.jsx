import { createGlobalStyle, css } from "styled-components";
import { fonts, media, colors } from "./variables";

export const GlobalStyles = createGlobalStyle`
    

    :root {
    }

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html,
    body {
        max-width: 100vw;
        overflow-x: hidden;
        font-size: 62.5%;
        background-color: ${colors.neutral1000};
        scroll-behavior: smooth;
    }

    body {
        position: relative;
    }


    a {
        color: inherit;
        text-decoration: none;
    }
    h3 {
        font-size: 4.2rem;
        line-height: 4.5rem;
    }

    h4 {
        font-size: 3rem;
        line-height: 3.6rem;
    }

    
`;
