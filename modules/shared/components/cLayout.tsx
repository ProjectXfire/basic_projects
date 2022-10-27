import Head from "next/head";
import React, { FC, ReactNode } from "react";
import NextLink from "next/link";
// External libraries
import styled, { css, keyframes } from "styled-components";

//******** COMPONENTS ********/

interface Props {
  title: string;
  content: string;
  children: ReactNode;
  bgColor?: string;
  flexCenter?: boolean;
}

export const MainLayout: FC<Props> = ({
  title,
  content,
  children,
  bgColor = "white",
  flexCenter = true,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={content} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextLink href="/">
        <FloatingButtonHome>Home</FloatingButtonHome>
      </NextLink>
      <SLayout bgColor={bgColor} flexCenter={flexCenter}>
        {children}
      </SLayout>
    </>
  );
};

//******** STYLES ********/

interface SProps {
  bgColor: string;
  flexCenter: boolean;
}

const animateBtn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const flexCenter = css`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SLayout = styled.main<SProps>`
  ${(props) => props.flexCenter && flexCenter}
  background-color: ${(props) => props.bgColor};
`;

const FloatingButtonHome = styled.a`
  width: 60px;
  height: 60px;
  position: fixed;
  bottom: 30px;
  right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #37474f;
  color: white;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  &:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
  animation: ${animateBtn} 500ms ease-out;
  animation-fill-mode: backwards;
`;
