import React, { useState, ChangeEvent, FC } from "react";
// External libraries
import styled, { css } from "styled-components";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

//******** COMPONENTS ********//

interface CounterProps {
  maxValue?: number;
  children: (args: { value: number }) => JSX.Element;
}

export const Counter: FC<CounterProps> = ({ maxValue = 100, children }) => {
  //--> Hooks

  const [counter, setCounter] = useState(1);

  //--> Methods

  const onIncrement = () => {
    setCounter((prev) => Math.min(prev + 1, maxValue));
  };
  const onDecrement = () => {
    setCounter((prev) => Math.max(prev - 1, 1));
  };

  const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value;
    if (!value) return setCounter(1);
    if (isNaN(value)) return;
    if (value < 1) return;
    if (value > maxValue) return;
    setCounter(value);
  };

  //--> Renders

  return (
    <>
      <SCounter>
        <SACounterInput onChange={onHandleChange} type="text" value={counter} />
        <SACounterActions>
          <UpArrow onClick={onIncrement} />
          <DownArrow onClick={onDecrement} />
        </SACounterActions>
      </SCounter>
      {children({ value: counter })}
    </>
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
  gap: 2px;
  & svg {
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
