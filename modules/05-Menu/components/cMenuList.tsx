import React, { FC } from "react";
// External libraries
import styled from "styled-components";
// Interfaces
import { IMenu } from "../data/menus";
import { MenuCard } from "./cMenuCard";

//******** COMPONENTS ********//

interface Props {
  menus: IMenu[];
}

export const MenuList: FC<Props> = ({ menus }) => {
  return (
    <SMenuList>
      {menus.map((menu) => (
        <MenuCard key={menu.id} menu={menu} />
      ))}
    </SMenuList>
  );
};

//******** STYLES ********//

const SMenuList = styled.section`
  width: 90%;
  display: grid;
  margin: 20px 10px;
  grid-template-columns: 1fr;
  gap: 40px;
  @media (min-width: 769px) {
    grid-template-columns: 1fr 1fr;
  }
`;
