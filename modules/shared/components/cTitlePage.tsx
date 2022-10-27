import React, { FC } from "react";
// External libraries
import styled from "styled-components";

interface Props {
  title: string;
  underlineColor?: string;
}

export const TitlePage: FC<Props> = ({ title, underlineColor = "blue" }) => {
  return (
    <TitleProjects>
      <h2>{title}</h2>
      <Underline color={underlineColor} />
    </TitleProjects>
  );
};

interface SProps {
  color: string;
}

const TitleProjects = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  & h2 {
    margin-bottom: 1rem;
  }
`;

const Underline = styled.div<SProps>`
  width: 100px;
  margin-bottom: 40px;
  border-bottom: 4px solid ${(props) => props.color};
`;
