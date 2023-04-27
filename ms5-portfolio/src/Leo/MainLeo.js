import React from "react";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import { FontStyles, GlobalStyle } from "./global-styles";

export default function Main() {
  return <>
    <GlobalStyle />
    <FontStyles />
    <Header />
    <AboutMe />
  </>
}