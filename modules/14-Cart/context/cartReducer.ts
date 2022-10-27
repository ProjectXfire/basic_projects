import { CartState, ILoadValues } from "./cartContext";

type IAction =
  | { type: "setValues"; payload: CartState }
  | { type: "updateItems"; payload: CartState }
  | { type: "clearAll" };

export const CartReducer = (state: CartState, action: IAction): CartState => {
  switch (action.type) {
    case "setValues":
      return { ...action.payload };
    case "updateItems":
      return { ...action.payload };
    case "clearAll":
      return { cart: [], items: 0, totalAmount: 0 };
    default:
      return state;
  }
};
