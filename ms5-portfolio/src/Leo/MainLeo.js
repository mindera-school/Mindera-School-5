import React, { useEffect, useState } from "react";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import { FontStyles, GlobalStyle } from "./global-styles";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects/Projects";
import Contacts from "./components/Contacts/Contacts";

export default function Main() {
  const aboutMe = useRef(null);
  const techs = useRef(null);
  const projects = useRef(null);
  const [techsVis, setTechsVis] = useState();

  useEffect(() => {
    const techObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setTechsVis(entry.isIntersecting);
    });
    techObserver.observe(techs.current);
  })

  const scrollToAboutMe = () => {
    aboutMe.current.scrollIntoView({
      behavior: "smooth"
    });
  };

  const scrollToTech = () => {
    techs.current.scrollIntoView({
      behavior: "smooth"
    });
  };

  const scrollToProjects = () => {
    projects.current.scrollIntoView({
      behavior: "smooth",
      block: "end"
    });
  };

  return <>
    <GlobalStyle />
    <FontStyles />
    <Header scrollToAboutMe={scrollToAboutMe} scrollToTech={scrollToTech} scrollToProjects={scrollToProjects} />
    <div ref={aboutMe}>
      <AboutMe />
    </div>
    <div ref={techs}>
      <Technologies isVisible={techsVis} />
    </div>
    <div ref={projects}>
      <Projects />
    </div>
    <div>
      <Contacts />
    </div>
  </>
}