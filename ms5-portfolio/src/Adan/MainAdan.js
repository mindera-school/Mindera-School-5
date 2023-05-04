import React, { useState, createContext } from "react";
import Header from "./components/Header";
import { MainStyle } from "./adanStyles";
import Profile from "./components/Profile";
import Projects from "./components/Projects";

export const adanContext = createContext(null);

export default function Main() {

  const [activePage, setActivePage] = useState("adan");


  const content = {
    adan: (<Profile />),
    projects: (<Projects />)
  }

  return(
    <adanContext.Provider value={{activePage, setActivePage}}>
      <MainStyle>
        <Header />
        {content[activePage]}
      </MainStyle>
    </adanContext.Provider>  
  );
}

