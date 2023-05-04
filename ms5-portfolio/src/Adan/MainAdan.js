import React, { useState, createContext } from "react";
import Header from "./components/Header";
import { MainStyle } from "./adanStyles";
import Profile from "./components/Profile";

export const adanContext = createContext(null);

export default function Main() {

  const [activePage, setActivePage] = useState("adan");


  const content = {
    adan: (<Profile />),
    projects: (<h1>teupai</h1>)
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

