import React, { FC } from "react";
// Variables
import { colors } from "../variables/colors";
// External libraries
import styled from "styled-components";

//******** COMPONENTS ********//

interface Props {
  categories: string[];
  onSelectCat: (cat: string) => void;
}

export const MenuNavbar: FC<Props> = ({ categories, onSelectCat }) => {
  return (
    <SMenuNavbar>
      <SBtnCat
        type="button"
        color={colors.primary}
        onClick={() => onSelectCat("all")}
      >
        All
      </SBtnCat>
      {categories.map((cat) => (
        <SBtnCat
          type="button"
          key={cat}
          color={colors.primary}
          onClick={() => onSelectCat(cat)}
        >
          {cat}
        </SBtnCat>
      ))}
    </SMenuNavbar>
  );
};

//******** STYLES ********//

interface SPropsBtnCat {
  color?: string;
}

const SMenuNavbar = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
`;

const SBtnCat = styled.button<SPropsBtnCat>`
  padding: 5px 10px;
  text-transform: capitalize;
  background-color: white;
  border: none;
  font-size: 1.2rem;
  color: ${(props) => props.color};
  border: 1px solid white;
  border-radius: 5px;
  transition: all 500ms;
  &:focus {
    border: 1px solid ${(props) => props.color};
  }
  &:hover {
    background-color: ${(props) => props.color};
    color: white;
  }
`;
