import styled, { createGlobalStyle } from "styled-components";
import Roboto from "./assets/font/Roboto-Regular.ttf";
import Sherman from "./assets/font/Sherman-Display.ttf";
import Simply from "./assets/font/SimplySans-Bold.ttf";
import Mustang from "./assets/font/Black Mustang.ttf";


export const GlobalStyle = createGlobalStyle`


    body {
        background-color: #B9EDDD;
        height: 100vh;
        width: 100vw;
        
    }
`

export const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'Roboto';
        src: url(${Roboto});
    }

    @font-face {
        font-family: 'Sherman';
        src: url(${Sherman});
    }

    @font-face {
        font-family: 'Simply';
        src: url(${Simply});
    }

    @font-face {
        font-family: 'Mustang';
        src: url(${Mustang});
    }

`;