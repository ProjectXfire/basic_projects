import React, { FC, useEffect, useState } from "react";
import NextLink from "next/link";
// External libraries
import styled, { css } from "styled-components";

//******** COMPONENTS ********//

interface Props {
  isOpen?: boolean;
  onClose?: () => void;
  children: JSX.Element | JSX.Element[];
}

export const Sidebar: FC<Props> = ({ isOpen = false, onClose, children }) => {
  //--> Hooks

  const [isFirstOpen, setIsFirstOpen] = useState(true);

  //--> Effects

  useEffect(() => {
    if (isFirstOpen) setIsFirstOpen(false);
  }, [isFirstOpen]);

  //--> Renders

  return (
    <>
      <SSidebar open={isOpen} firstOpen={isFirstOpen}>
        {children}
      </SSidebar>
      <SBackground open={isOpen} onClick={onClose} />
    </>
  );
};

//******** STYLES ********//

interface SPropsSiderbar {
  open: boolean;
  firstOpen: boolean;
}

interface SPropsBackground {
  open: boolean;
}

const openSidebar = css`
  transform: translateX(0%);
  transition: all 500ms;
`;

const closeSidebar = css`
  transition: all 500ms;
`;

const SSidebar = styled.div<SPropsSiderbar>`
  position: fixed;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  width: 250px;
  background-color: white;
  overflow: auto;
  transform: translateX(-100%);
  ${(props) => props.open && openSidebar}
  ${(props) => !props.open && !props.firstOpen && closeSidebar}
  z-index: 2;
`;

const SBackground = styled.div<SPropsBackground>`
  display: ${(props) => (props.open ? "block" : "none")};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.6);
`;
