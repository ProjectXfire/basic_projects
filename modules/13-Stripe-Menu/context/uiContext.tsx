import { createContext, ReactNode, useReducer } from "react";
import { UIReducer } from "./uiReducer";

export interface UIState {
  isOpen: boolean;
}

const UIInitState: UIState = {
  isOpen: false,
};

interface UIContextProps {
  state: UIState;
  toggleSidebar: () => void;
}

export const UIContext = createContext({} as UIContextProps);

export const UIProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(UIReducer, UIInitState);

  const toggleSidebar = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <UIContext.Provider value={{ state, toggleSidebar }}>
      {children}
    </UIContext.Provider>
  );
};
