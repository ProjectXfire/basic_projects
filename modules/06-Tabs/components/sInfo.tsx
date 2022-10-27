import React, { FC } from "react";
// External libraries
import styled from "styled-components";
import { FaAngleDoubleRight } from "react-icons/fa";
// Interfaces
import { IExperience } from "../interfaces";
import { colors } from "../variables/colors";

//******** COMPONENTS ********//

interface Props {
  experience: IExperience;
}

export const Info: FC<Props> = ({ experience }) => {
  return (
    <SExperience>
      <STitle>{experience.title}</STitle>
      <STag bgColor={colors.secondary}>{experience.company}</STag>
      <SDate color={colors.secondary}>{experience.dates}</SDate>
      {experience.duties.map((duty, index) => (
        <SDuties key={duty + index} color={colors.secondary}>
          <FaAngleDoubleRight />
          <p>{duty}</p>
        </SDuties>
      ))}
    </SExperience>
  );
};

//******** STYLES ********//

interface STagProps {
  bgColor?: string;
}

interface STextProps {
  color?: string;
}

const SExperience = styled.article`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const STitle = styled.h3`
  margin: 0;
`;

const STag = styled.div<STagProps>`
  max-width: 90px;
  padding: 5px;
  text-align: center;
  color: white;
  background-color: ${(props) => props.bgColor};
  font-weight: bold;
  border-radius: 4px;
`;

const SDate = styled.p<STextProps>`
  margin: 0;
  margin-bottom: 15px;
  color: ${(props) => props.color};
`;

const SDuties = styled.div<STextProps>`
  display: flex;
  align-items: center;
  gap: 35px;
  & p {
    margin: 0;
  }
  & svg {
    color: ${(props) => props.color};
  }
`;
