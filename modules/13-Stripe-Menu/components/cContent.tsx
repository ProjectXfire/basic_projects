import React from "react";
import NextImage from "next/image";
// External libraries
import styled from "styled-components";
// Images
import PhoneImg from "@public/stripe/phone.svg";

//******** COMPONENTS ********//

export const Content = () => {
  return (
    <SContent>
      <STitle>
        <h1>Payments infrastructure for the internet</h1>
        <p>
          Millions of companies of all sizes—from startups to Fortune 500s—use
          Stripe’s software and APIs to accept payments, send payouts, and
          manage their businesses online.
        </p>
        <button>Start now</button>
      </STitle>
      <SImage>
        <NextImage
          src={PhoneImg}
          layout="fill"
          alt="credit card"
          objectFit="fill"
        />
      </SImage>
    </SContent>
  );
};

//******** STYLES ********//

const SContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  gap: 18px;
  width: 95%;
  max-width: 1000px;
  margin-top: 100px;
  margin-bottom: 50px;
  padding: 25px;
  overflow: auto;
  @media (min-width: 768px) {
    grid-template-columns: 1.5fr 1fr;
    height: calc(100vh - 150px);
  }
`;

const STitle = styled.div`
  grid-row: 2;
  & h1 {
    margin-bottom: 30px;
    font-size: 2.5rem;
  }
  & p {
    line-height: 1.5rem;
    margin-bottom: 25px;
  }
  & button {
    padding: 4px 8px;
    background-color: black;
    color: white;
    border-radius: 4px;
  }
  @media (min-width: 768px) {
    grid-row: 1;
    & h1 {
      margin-bottom: 30px;
      font-size: 4.5rem;
    }
  }
`;

const SImage = styled.div`
  position: relative;
  grid-row: 1;
  width: 100%;
  height: 400px;
  @media (min-width: 768px) {
    height: 600px;
    grid-row: 1;
  }
`;
