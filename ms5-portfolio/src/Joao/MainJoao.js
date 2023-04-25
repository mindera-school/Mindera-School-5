import React from "react";
import Header from "./components/Header";
import { GlobalStyle, Body } from "./mainJoaoStyles";
import { Helmet } from "react-helmet";
import minderaLogo from "./images/minderaLogo.png";
import { ReposProvider } from "./services/RepoService";

export default function Main() {
  return (
    <ReposProvider>
      <Body>
        <GlobalStyle />
        <Helmet>
          <title>Rocha Portfolio</title>
          <link
            rel="shortcut icon"
            href={minderaLogo}
            sizes="64x64"
            type="image/png"
          />
        </Helmet>
        <Header></Header>
      </Body>
    </ReposProvider>
  );
}
