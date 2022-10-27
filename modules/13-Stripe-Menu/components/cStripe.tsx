import React from "react";
// External libraries
import styled from "styled-components";
// Components
import { Content } from "./cContent";
import { Navbar } from "./cNavbar";

//******** COMPONENTS ********//

export const Stripe = () => {
  return (
    <SStripe>
      <Navbar />
      <Content />
    </SStripe>
  );
};

//******** STYLES ********//

const SStripe = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
