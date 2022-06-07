import React, { useContext, useReducer } from "react";
import Add from "../add/Add";
import Reset from "../reset/Reset";
import Substract from "../substract/Substract";
import {
  CounterButtonContainerStyled,
  CounterContainerStyled,
  CounterSpanStyled,
} from "./CounterStyles";
import CountReducer from "../../context/CountReducer";

const Counter = () => {
  const [state] = useContext(CountReducer);

  return (
    <CounterContainerStyled>
      <CounterButtonContainerStyled>
        <Substract />
        <CounterSpanStyled>{state.count}</CounterSpanStyled>
        <Add />
      </CounterButtonContainerStyled>
      <Reset />
    </CounterContainerStyled>
  );
};

export default Counter;
