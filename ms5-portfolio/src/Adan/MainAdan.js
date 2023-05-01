import React from "react";
import Header from "./components/Header";
import { MainStyle } from "./adanStyles";
import Profile from "./components/Profile";

export default function Main() {
  return(
  <MainStyle>
    <Header />
    <Profile />
  </MainStyle>
  );
}