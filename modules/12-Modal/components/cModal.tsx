import React, { FC, useEffect, useRef, useState } from "react";
// External libraries
import styled, { css } from "styled-components";
import { IoCloseCircleSharp } from "react-icons/io5";

//******** COMPONENTS ********//

interface Props {
  open: boolean;
  onClose: () => void;
}

export const Modal: FC<Props> = ({ open = false, onClose }) => {
  //--> Variables

  const dimensionsRef = useRef<HTMLDivElement>(null);
  const [isFirstOpen, setIsFirstOpen] = useState(true);

  //--> Hooks

  const [dimensions, setDimensions] = useState({
    height: 0,
    width: 0,
  });

  //--> Effects

  useEffect(() => {
    const dimen = dimensionsRef.current?.getBoundingClientRect();
    if (dimen) {
      setDimensions({ height: dimen.height, width: dimen.width });
    }
  }, []);

  useEffect(() => {
    if (isFirstOpen) setIsFirstOpen(false);
  }, [isFirstOpen]);

  //--> Renders

  return (
    <>
      <SModal
        ref={dimensionsRef}
        isFirstOpen={isFirstOpen}
        open={open}
        height={dimensions.height}
      >
        <SCloseIcon type="button" onClick={onClose}>
          <IoCloseCircleSharp />
        </SCloseIcon>
        <p>
          <strong>Soy un modal!!! 😄</strong>
        </p>
        <p>
          <strong>Modal adaptativo al contenido con respecto a la vista</strong>
        </p>
      </SModal>
      <SBackground open={open} onClick={onClose} />
    </>
  );
};

//******** STYLES ********//

interface SPropsModal {
  open: boolean;
  firstOpen?: boolean;
  height: number;
  isFirstOpen: boolean;
}

interface SPropsBackground {
  open?: boolean;
}

const showModal = (height: number) => css`
  transform: translateY(calc(50vh - ${height / 2}px));
  transition: all 500ms;
`;

const hideModal = css`
  transition: all 500ms;
`;

const SModal = styled.div<SPropsModal>`
  position: fixed;
  top: 0;
  width: 90%;
  max-width: 600px;
  padding: 25px;
  border-radius: 8px;
  background-color: #ececec;
  z-index: 2;
  transform: translateY(-300%);
  ${(props) => !props.open && !props.isFirstOpen && hideModal}
  ${(props) => props.open && showModal(props.height)}
`;

const SCloseIcon = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  display: flex;
  border: none;
  padding: 0;
  background-color: transparent;
  & svg {
    font-size: 2rem;
  }
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
