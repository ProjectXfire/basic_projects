import React, { FC } from "react";
import NextLink from "next/link";
// External libraries
import styled, { css, keyframes } from "styled-components";
// Interfaces
import { ISublink } from "../data/menu";

//******** COMPONENTS ********//

interface Props {
  link: ISublink;
}

export const Menu: FC<Props> = ({ link }) => {
  //--> Renders

  return (
    <SMenu>
      <SMenuCategory>{link.page}</SMenuCategory>
      <SSubmenus>
        <h5>{link.page}</h5>
        <SSubmenu>
          {link.links.map((item) => (
            <NextLink key={item.label} href={item.url}>
              <a>
                {item.icon} {item.label}
              </a>
            </NextLink>
          ))}
        </SSubmenu>
      </SSubmenus>
    </SMenu>
  );
};

//******** STYLES ********//

const SMenu = styled.li`
  height: 35px;
  position: relative;
  margin-top: 12px;
`;

const SMenuCategory = styled.div`
  padding: 0px 25px;
  color: white;
  text-transform: capitalize;
  font-weight: bold;
  cursor: default;
  &::after {
    content: "";
    display: block;
    border-bottom: 2px solid white;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }
  &:hover::after {
    transform: scaleX(1);
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateX(-50%) translateY(0px);
  }
`;

const SSubmenus = styled.div`
  display: none;
  position: absolute;
  top: 2rem;
  left: 50%;
  padding: 25px;
  background-color: white;
  border-radius: 8px;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  animation: ${fadeIn} 500ms forwards;
  z-index: 1;
  & h5 {
    margin: 0;
    margin-bottom: 8px;
    text-transform: capitalize;
  }
`;

const SSubmenu = styled.div`
  display: flex;
  gap: 45px;
  & a {
    display: flex;
    align-items: center;
    gap: 6px;
    text-transform: capitalize;
  }
  &::after {
    content: "";
    width: 0px;
    height: 0px;
    display: block;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid white;
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
