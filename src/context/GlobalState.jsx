import { createContext, useContext, useReducer } from "react";
import AppReducer from "./AppReducer";

export const Context = createContext();

const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};

export const useGlobalState = () => {
  return useContext(Context);
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <Context.Provider value={{transactions: state.transactions}}>
      {children}
    </Context.Provider>
  );
};
