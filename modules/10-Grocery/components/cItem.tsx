import React, { FC } from "react";
// External libraries
import styled from "styled-components";
import { MdModeEdit, MdDelete } from "react-icons/md";
// Interfaces
import { IItem } from "../interfaces";

//******** COMPONENTS ********//

interface Props {
  item: IItem;
  onDelete: (id: string) => void;
  onUpdate: ({ id, itemName }: { id: string; itemName: string }) => void;
}

export const Item: FC<Props> = ({ item, onUpdate, onDelete }) => {
  return (
    <SItem>
      <div>{item.itemName}</div>
      <SActions>
        <SButton
          type="button"
          onClick={() => onUpdate({ id: item.id, itemName: item.itemName })}
        >
          <MdModeEdit color="green" />
        </SButton>
        <SButton type="button" onClick={() => onDelete(item.id)}>
          <MdDelete color="red" />
        </SButton>
      </SActions>
    </SItem>
  );
};

//******** STYLES ********//

interface Props {}

const SItem = styled.article`
  margin-bottom: 18px;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
`;

const SActions = styled.div`
  display: flex;
  gap: 5px;
`;

const SButton = styled.button`
  display: flex;
  padding: 4px;
  background-color: #e9e9ea;
  border: 1px solid transparent;
  border-radius: 4px;
  font-size: 1.3rem;
  &:hover {
    border: 1px solid #c2c2c2;
  }
`;
