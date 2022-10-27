import React, { FC } from "react";
import NextImage from "next/image";
// External libraries
import styled from "styled-components";
// Variables
import { colors } from "../variables/colors";
// Interfaces
import { IMenu } from "../data/menus";

//******** COMPONENTS ********//

interface Props {
  menu: IMenu;
}

export const MenuCard: FC<Props> = ({ menu }) => {
  return (
    <SMenuCard>
      <SMenuImage>
        <NextImage
          layout="fill"
          src={menu.img}
          alt={menu.title}
          objectFit="cover"
        />
      </SMenuImage>
      <SMenuBody>
        <SMenuHeader colorTitle={colors.secondary} colorPrice={colors.primary}>
          <span>{menu.title}</span>
          <span>${menu.price}</span>
        </SMenuHeader>
        <SMenuDesc colorDesc={colors.secondary}>{menu.desc}</SMenuDesc>
      </SMenuBody>
    </SMenuCard>
  );
};

//******** STYLES ********//

interface SHeaderProps {
  colorPrice?: string;
  colorTitle?: string;
}

interface SDescProps {
  colorDesc?: string;
}

const SMenuCard = styled.article`
  display: flex;
  gap: 10px;
  flex-direction: column;
  @media (min-width: 425px) {
    flex-direction: row;
    height: 200px;
  }
`;

const SMenuImage = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  @media (min-width: 425px) {
    width: 40%;
  }
`;

const SMenuBody = styled.div`
  width: 100%;
  @media (min-width: 425px) {
    width: 60%;
  }
`;

const SMenuHeader = styled.div<SHeaderProps>`
  display: flex;
  padding-bottom: 10px;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.colorTitle};
  span:nth-of-type(1) {
    text-transform: capitalize;
    font-weight: bold;
    color: ${(props) => props.colorTitle};
  }
  span:nth-of-type(2) {
    color: ${(props) => props.colorPrice};
    font-weight: bold;
  }
`;

const SMenuDesc = styled.div<SDescProps>`
  margin-top: 10px;
  color: ${(props) => props.colorDesc};
`;
