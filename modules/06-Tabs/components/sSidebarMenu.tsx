import React, { FC } from "react";
// External libraries
import styled from "styled-components";
import { colors } from "../variables/colors";

//******** COMPONENTS ********//

interface Props {
  companies: string[];
  onSelectCompany: (comp: string) => void;
}

export const SidebarMenu: FC<Props> = ({ companies, onSelectCompany }) => {
  return (
    <SSidebarMenu>
      {companies.map((company) => (
        <SButtonMenu
          key={company}
          color={colors.primary}
          onClick={() => onSelectCompany(company)}
        >
          {company}
        </SButtonMenu>
      ))}
    </SSidebarMenu>
  );
};

//******** STYLES ********//

interface SButtonProps {
  color?: string;
}

const SSidebarMenu = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 10px;
  flex-wrap: wrap;
  @media (min-width: 768px) {
    flex-direction: column;
  }
`;

const SButtonMenu = styled.button<SButtonProps>`
  padding: 10px 25px;
  background-color: white;
  border: none;
  border-left: 2px solid transparent;
  color: black;
  transition: all 300ms;
  &:focus {
    border-left: 2px solid ${(props) => props.color};
    color: ${(props) => props.color};
  }
`;
