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

    }


    a {
        color: inherit;
        text-decoration: none;
    }

    
`;
