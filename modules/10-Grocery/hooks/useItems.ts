import { FormEvent, useState, useContext } from "react";
// External libraries
import { v4 as uuidv4 } from "uuid";
// Interfaces
import { IItem } from "../interfaces";
// Contexts
import { AlertContext } from "../../shared/context";

export const useItems = (item: IItem) => {
  //--> Hooks

  const [items, setItems] = useState<IItem[]>([]);
  const { onShowAlert } = useContext(AlertContext);

  //--> Methods

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!item.itemName) {
      onShowAlert("Please insert a item!!!", 2000, "warn");
      return;
    }
    if (!item.id) {
      const newItem: IItem = {
        id: uuidv4(),
        itemName: item.itemName,
      };
      setItems([...items, newItem]);
      onShowAlert("Added successfully!!!", 3000, "successful");
      return;
    }
    const updatedItemsList = items.map((it) =>
      it.id === item.id ? { ...it, ...item } : it
    );
    setItems(updatedItemsList);
    onShowAlert("Updated successfully!!!", 3000, "successful");
  };

  const onDeleteOneItem = (id: string) => {
    const updatedItemsList = items.filter((item) => item.id !== id);
    setItems(updatedItemsList);
    onShowAlert("One deleted item!!!", 3000, "error");
  };

  const onDeleteAllItems = () => {
    setItems([]);
  };

  return {
    items,
    onSubmit,
    onDeleteAllItems,
    onDeleteOneItem,
  };
};
