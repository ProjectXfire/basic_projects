import React, { useState } from "react";
import NextLink from "next/link";
// External libraries
import styled, { css, keyframes } from "styled-components";
import { FaHamburger } from "react-icons/fa";
// Data
import { links, social } from "../data/menu";
// Components
import { Sidebar } from "@modules/shared/components";

//******** COMPONENTS ********//

export const Navbar = () => {
  //--> Hooks

  const [isOpen, setIsOpen] = useState(false);

  //--> Methods

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  //--> Renders

  return (
    <>
      <SNavbar>
        <SNavbarHome>
          <span>Gvb</span> <span>Developer</span>
        </SNavbarHome>
        <SNavbarLinks>
          {links.map((link) => (
            <NextLink key={link.id} href={link.url}>
              <a>{link.text}</a>
            </NextLink>
          ))}
        </SNavbarLinks>
        <SNavbarSocial>
          {social.map((icon) => (
            <a key={icon.id}>{icon.icon}</a>
          ))}
        </SNavbarSocial>
        <SNavbarHamburguer type="button" onClick={toggleSidebar}>
          <FaHamburger />
        </SNavbarHamburguer>
      </SNavbar>
      <Sidebar isOpen={isOpen} onClose={toggleSidebar}>
        {links.map((link) => (
          <NextLink key={link.id} href={link.url}>
            <SSidebarLinks>{link.text}</SSidebarLinks>
          </NextLink>
        ))}
      </Sidebar>
    </>
  );
};

//******** STYLES ********//

const SNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 20px 25px;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
`;

const SNavbarHome = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  text-shadow: 1px 1px 2px grey;
  span:nth-of-type(2) {
    color: #328cd5;
  }
`;

const showMenuOption = css`
  @media (min-width: 768px) {
    display: flex;
  }
`;

const SNavbarLinks = styled.div`
  display: none;
  align-items: center;
  gap: 18px;
  & a {
    text-transform: capitalize;
  }
  ${showMenuOption}
`;

const SNavbarSocial = styled.div`
  display: none;
  align-items: center;
  gap: 12px;
  color: #328cd5;
  & a {
    font-size: 1.2rem;
    cursor: pointer;
  }
  ${showMenuOption}
`;

const SSidebarLinks = styled.a`
  padding: 18px;
  transition: all 500ms;
  text-transform: capitalize;
  &:hover {
    color: white;
    padding-left: 20px;
    background-color: #328cd5;
  }
`;

const animation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const SNavbarHamburguer = styled.button`
  display: block;
  background-color: white;
  border: none;
  color: #328cd5;
  font-size: 1.2rem;
  &:hover {
    animation: ${animation} 500ms forwards infinite;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;
