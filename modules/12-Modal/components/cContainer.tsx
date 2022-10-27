import React, { useState } from "react";
// External libraries
import styled from "styled-components";
import { Modal } from "./cModal";

//******** COMPONENTS ********//

export const Container = () => {
  //--> Hooks

  const [isOpen, setIsOpen] = useState(false);

  //--> Methods

  const onToggleOpenClose = () => {
    setIsOpen((prev) => !prev);
  };

  //--> Renders

  return (
    <>
      <SButton type="button" onClick={onToggleOpenClose}>
        Open modal
      </SButton>
      <Modal open={isOpen} onClose={onToggleOpenClose} />
    </>
  );
};

//******** STYLES ********//

const SButton = styled.button`
  padding: 10px 15px;
  background-color: black;
  border: 2px solid white;
  color: white;
  border-radius: 8px;
  &:hover {
    background-color: white;
    border: 2px solid black;
    color: black;
  }
`;
