import { createContext, ReactNode, useReducer } from "react";
// Interfaces
import { IItem, items } from "../data/items";
// Reducers
import { CartReducer } from "./cartReducer";

export interface ILoadValues {
  items: number;
  totalAmount: number;
}

export interface CartState {
  items: number;
  totalAmount: number;
  cart: IItem[];
}

const CartInitState: CartState = {
  items: 0,
  totalAmount: 0,
  cart: [],
};

interface CartContextProps {
  state: CartState;
  setValues: (values: IItem[]) => void;
  updateItems: (id: number, value: number) => void;
  removeItem: (id: number) => void;
  clearAll: () => void;
}

export const CartContext = createContext({} as CartContextProps);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  //--> Hooks

  const [state, dispatch] = useReducer(CartReducer, CartInitState);

  //--> Methods

  const setValues = (cart: IItem[]) => {
    const qtty = cart.reduce((prev, current) => prev + current.amount, 0);
    const amount = cart.reduce(
      (prev, current) => prev + current.price * current.amount,
      0
    );
    dispatch({
      type: "setValues",
      payload: { items: qtty, totalAmount: amount, cart },
    });
  };

  const updateItems = (id: number, value: number) => {
    const updatedItems = state.cart.map((item) =>
      item.id === id
        ? { ...item, amount: value, totalAmount: item.price * value }
        : item
    );
    const qtty = updatedItems.reduce(
      (prev, current) => prev + current.amount,
      0
    );
    const totalAmount = updatedItems.reduce(
      (prev, current) => prev + current.price * current.amount,
      0
    );
    dispatch({
      type: "updateItems",
      payload: { items: qtty, cart: updatedItems, totalAmount },
    });
  };

  const removeItem = (id: number) => {
    const updatedItems = state.cart.filter((item) => item.id !== id);
    const qtty = updatedItems.reduce(
      (prev, current) => prev + current.amount,
      0
    );
    const totalAmount = updatedItems.reduce(
      (prev, current) => prev + current.price * current.amount,
      0
    );
    dispatch({
      type: "updateItems",
      payload: { items: qtty, cart: updatedItems, totalAmount },
    });
  };

  const clearAll = () => {
    dispatch({ type: "clearAll" });
  };

  //--> Renders

  return (
    <CartContext.Provider
      value={{ state, setValues, updateItems, removeItem, clearAll }}
    >
      {children}
    </CartContext.Provider>
  );
};
