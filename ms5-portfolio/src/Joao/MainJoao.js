import React from "react";
import Header from "./components/Header";
import { Body } from "./mainJoaoStyles";
import { Helmet } from "react-helmet";
import minderaLogo from "./images/minderaLogo.png";
import { ReposProvider } from "./services/RepoService";
import AboutMe from "./containers/AboutMe";
import WhatIUse from "./containers/WhatIUse";
import ProjectsContainer from "./containers/ProjectsContainer";
import Contact from "./containers/Contact";

export default function Main() {
  const handleScroll = (targetId) => {
    const target = document.querySelector(targetId);
    if (target) {
      const topOffset = target.getBoundingClientRect().top - 120;
      window.scrollTo({
        top: window.pageYOffset + topOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <ReposProvider>
      <Helmet>
        <title>Rocha Portfolio</title>
        <link
          rel="shortcut icon"
          href={minderaLogo}
          sizes="64x64"
          type="image/png"
        />
      </Helmet>
      <Header onScroll={handleScroll} />
      <Body>
        <AboutMe id="about-me" />
        <WhatIUse id="what-i-use" />
        <ProjectsContainer id="projects" onScroll={handleScroll} />
        <Contact id="contact"/>
      </Body>
    </ReposProvider>
  );
}
