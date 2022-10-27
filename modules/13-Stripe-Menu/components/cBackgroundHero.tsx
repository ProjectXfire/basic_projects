import React, { FC } from "react";
// External libraries
import styled from "styled-components";

//******** COMPONENTS ********//

interface Props {
  children: JSX.Element;
}

export const BackgroundHero: FC<Props> = ({ children }) => {
  return <SBackgroundHero>{children}</SBackgroundHero>;
};

//******** STYLES ********//

const SBackgroundHero = styled.section`
  height: calc(100vh / 1.6);
  background-image: url("/stripe/hero.svg");
  background-size: cover;
  background-repeat: no-repeat;
`;
