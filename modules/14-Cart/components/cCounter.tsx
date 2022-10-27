import React, { FC, useState } from "react";
// External libraries
import styled, { css } from "styled-components";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

interface Props {
  curentValue: number;
  onIncrement: (value: number) => void;
  onDecrement: (value: number) => void;
  incrementIn?: number;
  decrementIn?: number;
}

export const Counter: FC<Props> = ({
  curentValue,
  decrementIn = -1,
  incrementIn = 1,
  onDecrement,
  onIncrement,
}) => {
  return (
    <SCounter>
      <SACounterActions>
        <UpArrow onClick={() => onIncrement(incrementIn)} />
        <span>{curentValue > 99 ? `+99` : `${curentValue}`}</span>
        <DownArrow onClick={() => onDecrement(decrementIn)} />
      </SACounterActions>
    </SCounter>
  );
};

//******** STYLES ********//

const SCounter = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const SACounterInput = styled.input`
  width: 60px;
  padding: 6px;
  text-align: center;
  border: none;
  outline: none;
  font-size: 1.2rem;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  &:focus {
    border-bottom: 2px solid rgba(0, 0, 0, 1);
  }
`;

const SACounterActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  & span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    background: #223475;
    color: white;
    border-radius: 50%;
    font-size: 0.8rem;
  }
  & svg {
    font-size: 1.2rem;
    border-radius: 2px;
  }
`;

const IconActive = css`
  &:active {
    background-color: #0084ff;
    color: white;
  }
`;

const UpArrow = styled(TiArrowSortedUp)`
  ${IconActive}
`;

const DownArrow = styled(TiArrowSortedDown)`
  ${IconActive}
`;
