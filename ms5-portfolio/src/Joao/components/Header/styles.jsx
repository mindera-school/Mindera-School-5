import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderDummer = styled.div`
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  margin-bottom: 15px;
`;

export const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: white;
  box-shadow: 0px -50px 95px 29px rgba(0, 0, 0, 0.75);

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

export const LogoLink = styled(Link)`
  img {
    width: 50px;
  }

  @media (max-width: 768px) {
    img {
      width: 40px;
    }
  }
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: none;
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  li {
    margin-right: 20px;

    @media (max-width: 768px) {
      margin: 10px 0;
    }
  }
`;

export const NavItemLink = styled.a`
  color: black;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  font-weight: bold;
  font-size: 24px;

  &:hover {
    color: #c1a615;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const HamburgerMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
  }

  span {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px 0;
    background-color: black;
  }

  &:hover {
    & span {
      transition: background-color 0.2s ease-in-out;
      background-color: #c1a615;
    }
  }
`;

export const UserName = styled.p`
  margin: 0;
  font-weight: bold;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "-60%" : "-111%")};
  height: 100vh;
  width: 200px;
  background-color: white;
  padding: 60px 20px;
  transition: padding 0.3s ease-in-out, right 0.3s ease-in-out;
  z-index: 10;
  box-shadow: 12px 0px 20px 12px rgba(0, 0, 0, 0.75);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SidebarLink = styled.a`
  display: block;
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 20px;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #c1a615;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const SidebarUserName = styled.span`
  position: absolute;
  bottom: 135px;
  right: 60%;
  font-weight: bold;
`;


export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 59%;
  border: none;
  background-color: transparent;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    color: #c1a615;
  }
`;