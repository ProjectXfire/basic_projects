import React, { FormEvent, useState } from "react";
// External libraries
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
// Interfaces
import { IItem } from "../interfaces";
// Hooks
import { useForm, useItems } from "../hooks";
// Components
import { Item } from "./cItem";

//******** COMPONENTS *******//

export const GroceryBud = () => {
  //--> Hooks

  const { itemName, id, onChanges, onSetValues, onReset } = useForm({
    id: "",
    itemName: "",
  });
  const { items, onSubmit, onDeleteAllItems, onDeleteOneItem } = useItems({
    id,
    itemName,
  });

  //--> Renders

  return (
    <SGroceryBud>
      <STitle>Grocery Bud</STitle>
      <SUpsertBox
        onSubmit={(e) => {
          onSubmit(e);
          onReset();
        }}
      >
        <input
          type="text"
          placeholder="e.g eggs"
          value={itemName}
          onChange={(e) => onChanges("itemName", e.target.value)}
        />
        <button type="submit">Submit</button>
      </SUpsertBox>
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          onDelete={onDeleteOneItem}
          onUpdate={({ id, itemName }) => onSetValues({ id, itemName })}
        />
      ))}
      <SBtnClear
        type="button"
        onClick={() => {
          onDeleteAllItems();
          onReset();
        }}
      >
        Clear Items
      </SBtnClear>
    </SGroceryBud>
  );
};

//******** STYLES ********//

const SGroceryBud = styled.section`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 800px;
  padding: 25px;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
`;

const STitle = styled.h3`
  text-align: center;
`;

const SUpsertBox = styled.form`
  display: grid;
  grid-template-columns: 10fr 1fr;
  margin-bottom: 20px;
  & input {
    padding: 5px;
    outline: none;
  }
  & button {
    background-color: #85d8ff;
    border: none;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    color: white;
  }
`;

const SBtnClear = styled.button`
  padding: 8px 16px;
  align-self: flex-end;
  color: red;
  border: 1px solid red;
  border-radius: 4px;
  background-color: transparent;
  &:hover {
    color: white;
    background-color: red;
  }
`;
