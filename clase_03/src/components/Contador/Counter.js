import React, { useState } from "react";
import { CounterButton, CounterContainer } from "./ElementosCounter";

const Counter = () => {
  const [count, setCount] = useState("Hola");

  const increment = () => {
    setCount("Se termino");
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <CounterContainer>
      <CounterButton onClick={decrement}>-</CounterButton>
      <span>{count}</span>
      <CounterButton onClick={increment}>+</CounterButton>
    </CounterContainer>
  );
};

export default Counter;
