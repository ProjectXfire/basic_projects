import { UIState } from "./uiContext";

type IAction = { type: "toggle" };

export const UIReducer = (state: UIState, action: IAction): UIState => {
  switch (action.type) {
    case "toggle":
      return { ...state, isOpen: !state.isOpen };
    default:
      return state;
  }
};
