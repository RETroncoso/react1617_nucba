import React, { useReducer, createContext } from "react";
import { counterInitialState, counterReducer } from "../reducers/countReducer";

const CountReducer = createContext();

const CountReducerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, counterInitialState);

  const data = [state, dispatch];

  return <CountReducer.Provider value={data}>{children}</CountReducer.Provider>;
};

export { CountReducerProvider };

export default CountReducer;
