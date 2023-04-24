import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
`;

export const Body = styled.div`
  min-height: 100vh;
  background-color: #EFEFEF;
`;
