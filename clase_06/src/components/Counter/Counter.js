import React from "react";
import { useSelector } from "react-redux";
import Add from "../add/Add";
import Reset from "../reset/Reset";
import Substract from "../substract/Substract";
import {
  CounterButtonContainerStyled,
  CounterContainerStyled,
  CounterSpanStyled,
} from "./CounterStyles";

const Counter = () => {
  const state = useSelector((state) => state.counter);

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
