import React, { FC } from "react";
import NextLink from "next/link";
// External libraries
import styled from "styled-components";
// Interfaces
import { ISublink } from "../data/menu";

//******** COMPONENTS ********//

interface Props {
  sublink: ISublink;
}

export const MenuSidebar: FC<Props> = ({ sublink }) => {
  return (
    <>
      <SCategory>{sublink.page}</SCategory>
      {sublink.links.map((link) => (
        <NextLink key={link.label} href={link.url}>
          <SLink>
            {link.icon} <span>{link.label}</span>
          </SLink>
        </NextLink>
      ))}
    </>
  );
};

//******** STYLES ********//

const SCategory = styled.p`
  margin-left: 15px;
  text-transform: capitalize;
  font-weight: bolder;
`;

const SLink = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 5px 10px;
  text-transform: capitalize;
  cursor: pointer;
  transition: all 500ms;
  &:hover {
    background-color: #c4c4c4;
    color: white;
  }
`;
