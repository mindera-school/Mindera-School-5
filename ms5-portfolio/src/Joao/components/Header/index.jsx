import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import {
  Wrapper,
  LogoLink,
  NavList,
  NavItemLink,
  HamburgerMenu,
  UserName,
  Sidebar,
  SidebarLink,
  SidebarUserName,
  CloseButton,
  HeaderDummer
} from "./styles";
import minderaLogo from "../../images/minderaLogo.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <HeaderDummer />
      <Wrapper>
        <LogoLink to="/">
          <img src={minderaLogo} alt="Mindera Logo" />
        </LogoLink>
        <NavList className={isOpen ? "show" : ""}>
          <li>
            <NavItemLink href="#projects">Projects</NavItemLink>
          </li>
          <li>
            <NavItemLink href="#what-i-use">What I use</NavItemLink>
          </li>
          <li>
            <NavItemLink href="#about-me">About me</NavItemLink>
          </li>
          <li>
            <NavItemLink href="#contact">Contact</NavItemLink>
          </li>
        </NavList>
        <UserName>João Rocha</UserName>
        <HamburgerMenu isOpen={isOpen} onClick={toggleMenu}>
          <span />
          <span />
          <span />
        </HamburgerMenu>
        <Sidebar isOpen={isOpen}>
          <CloseButton onClick={toggleMenu}>
            <FaTimes />
          </CloseButton>
          <SidebarLink href="#projects">Projects</SidebarLink>
          <SidebarLink href="#what-i-use">What I use</SidebarLink>
          <SidebarLink href="#about-me">About me</SidebarLink>
          <SidebarLink href="#contact">Contact</SidebarLink>
          <SidebarUserName>João Rocha</SidebarUserName>
        </Sidebar>
      </Wrapper>
    </>
  );
}

export default Header;
