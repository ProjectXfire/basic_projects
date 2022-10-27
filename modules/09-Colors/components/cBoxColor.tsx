import React, { FC } from "react";
import styled from "styled-components";

//******** COMPONENTS ********//

interface Props {
  weight: number;
  hex: string;
  type: string;
}

export const BoxColor: FC<Props> = ({ hex, weight, type }) => {
  return (
    <SBoxColor type={type} bgColor={hex}>
      <div>
        <strong>{weight}%</strong>
      </div>
      <div>#{hex}</div>
    </SBoxColor>
  );
};

//******** STYLES ********//

interface SProps {
  bgColor: string;
  type: string;
}

const SBoxColor = styled.div<SProps>`
  height: 100px;
  padding: 15px;
  background-color: ${(props) => `#${props.bgColor}`};
  color: ${(props) => (props.type === "tint" ? "black" : "white")};
  @media (min-width: 768px) {
    height: 120px;
  }
`;
