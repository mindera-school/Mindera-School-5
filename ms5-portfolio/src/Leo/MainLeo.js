import React, { useEffect, useState } from "react";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import { FontStyles, GlobalStyle } from "./global-styles";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import Technologies from "./components/Technologies";

export default function Main() {
  const aboutMe = useRef(null);
  const techs = useRef(null);
  const [aboutMeVis, setAboutMeVis] = useState();
  const [techsVis, setTechsVis] = useState();

  useEffect(() => {
    const aboutMeObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setAboutMeVis(entry.isIntersecting);
    });
    aboutMeObserver.observe(aboutMe.current);
  }, []);

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

  return <>
    <GlobalStyle />
    <FontStyles />
    <Header scrollToAboutMe={scrollToAboutMe} scrollToTech={scrollToTech} />
    <div ref={aboutMe}>
      <AboutMe />
    </div>
    <div ref={techs}>
      <Technologies isVisible={techsVis} />
    </div>
  </>
}