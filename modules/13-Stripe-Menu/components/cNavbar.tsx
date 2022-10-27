import React, { useContext } from "react";
import NextImage from "next/image";
// External libraries
import styled, { keyframes } from "styled-components";
import { FaHamburger } from "react-icons/fa";
// Data
import { sublinks } from "../data/menu";
// Contexts
import { UIContext } from "../context/uiContext";
// Logo
import Logo from "@public/stripe/logo.svg";
// Components
import { Menu } from "./cMenus";

//******** COMPONENTS ********//

export const Navbar = () => {
  //--> Hooks

  const { toggleSidebar } = useContext(UIContext);

  //--> Renders

  return (
    <>
      <SNavbar>
        <SNavbarLogo>
          <NextImage src={Logo} alt="logo" />
        </SNavbarLogo>
        <SNavbarMenus>
          {sublinks.map((link) => (
            <Menu key={link.page} link={link} />
          ))}
        </SNavbarMenus>
        <SNavbarLogin>
          <button>Sign In</button>
        </SNavbarLogin>
        <SNavbarHamburguer type="button" onClick={toggleSidebar}>
          <FaHamburger />
        </SNavbarHamburguer>
      </SNavbar>
    </>
  );
};

//******** STYLES ********//

const SNavbar = styled.nav`
  position: absolute;
  width: 95%;
  max-width: 1000px;
  display: flex;
  padding: 14px;
  justify-content: space-between;
`;

const SNavbarLogo = styled.div`
  display: flex;
  align-items: center;
`;

const SNavbarMenus = styled.ul`
  display: none;
  margin: 0;
  height: 100%;
  padding: 0;
  & > li:hover div:nth-of-type(2) {
    display: block;
  }
  @media (min-width: 768px) {
    display: flex;
  }
`;

const SNavbarLogin = styled.div`
  display: none;
  align-items: center;
  & button {
    padding: 4px 8px;
    background-color: black;
    color: white;
    border-radius: 4px;
  }
  @media (min-width: 768px) {
    display: flex;
  }
`;

const animateHamburguer = keyframes`
  0% {
    transform: scale(1,1) translateY(0);
  }
  10% {
    transform: scale(1.1,.9) translateY(0);
  }
  30% {
    transform: scale(.9,1.1) translateY(-20px);
  }
  50% {
    transform: scale(1.05,.95) translateY(0);
  }
  57% {
    transform: scale(1,1) translateY(-7px);
  }
  64% {
    transform: scale(1,1) translateY(0);
  }
  100% {
    transform: scale(1,1) translateY(0);
  }
`;

const text = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.2);
  }
`;

const SNavbarHamburguer = styled.button`
  display: flex;
  align-items: center;
  display: flex;
  padding: 0;
  background-color: transparent;
  border: none;
  & svg {
    font-size: 1.5rem;
    color: white;
  }
  &:hover {
    animation-name: ${animateHamburguer};
    animation-timing-function: cubic-bezier(0.28, 0.84, 0.42, 1);
    animation-duration: 1.5s;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;
