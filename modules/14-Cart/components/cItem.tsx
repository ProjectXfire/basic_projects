import React, { FC, useContext, useEffect, useState } from "react";
import NextImage from "next/image";
// External libraries
import styled from "styled-components";
// Interfaces
import { IItem } from "../data/items";
// Contexts
import { CartContext } from "../context/cartContext";
// Components
import { Counter } from "./cCounter";

//******** COMPONENTS ********//

interface Props {
  item: IItem;
}

export const Item: FC<Props> = ({ item }) => {
  //--> Hooks

  const { updateItems, removeItem } = useContext(CartContext);
  const [counter, setCounter] = useState(item.amount);

  //--> Methods

  const onIncrement = (value: number) => {
    const newValue = counter + value;
    setCounter(newValue);
    updateItems(item.id, newValue);
  };
  const onDecrement = (value: number) => {
    if (counter <= 1) return;
    const newValue = counter + value;
    setCounter(newValue);
    updateItems(item.id, newValue);
  };

  //--> Renders

  return (
    <SItem>
      <SItemDetail>
        <div>
          <NextImage
            src={item.img}
            alt={item.title}
            width={100}
            height={100}
            objectFit="cover"
          />
        </div>
        <div>
          <p>{item.title}</p>
          <p>${item.price}</p>
          <button type="button" onClick={() => removeItem(item.id)}>
            Remove
          </button>
        </div>
      </SItemDetail>
      <SItemCounter>
        <Counter
          curentValue={counter}
          onDecrement={onDecrement}
          onIncrement={onIncrement}
        />
      </SItemCounter>
    </SItem>
  );
};

//******** STYLES ********//

const SItem = styled.article`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 10px;
`;

const SItemDetail = styled.div`
  display: flex;
  gap: 10px;
  & p {
    margin: 0;
    margin-bottom: 8px;
  }
  & p:nth-of-type(1) {
    color: #13138da2;
    font-weight: bold;
  }
  & p:nth-of-type(2) {
    color: #3232f3a0;
  }
  & button {
    border: none;
    background-color: transparent;
    color: #c73333;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const SItemCounter = styled.div``;
