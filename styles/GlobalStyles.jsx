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


    a, p {
        color: inherit;
        text-decoration: none;
        font-family: 'Judson', serif;
        font-size: 2.6rem;
        line-height: 3rem;
    }
    h1 {
        font-family: 'Archivo', sans-serif;  
        font-size: 3.6rem;
        line-height: 3.6rem;
    }
    h2 {
        font-family: 'Archivo', sans-serif;  
        font-size: 3.6rem;
        line-height: 3.6rem;
    }
    h3 {
        font-family: 'Archivo', sans-serif;
        font-size: 4.2rem;
        line-height: 4.5rem;
    }

    h4 {
        font-family: 'Archivo', sans-serif;
        font-size: 3rem;
        line-height: 3.6rem;
    }
    h5 {

    }
    h6 {

    }

 

    
`;
