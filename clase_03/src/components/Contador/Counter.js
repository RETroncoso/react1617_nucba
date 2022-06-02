import React, { useEffect, useState, useRef } from "react";
import { CounterButton, CounterContainer } from "./ElementosCounter";

const Counter = () => {
  const [count, setCount] = useState(0);

  // const increment = () => {
  //   setCount(count + 1);
  // };

  // const decrement = () => {
  //   setCount(count - 1);
  // };

  // return (
  //   <CounterContainer>
  //     <CounterButton onClick={decrement}>-</CounterButton>
  //     <span>{count}</span>
  //     <CounterButton onClick={increment}>+</CounterButton>
  //   </CounterContainer>
  // );

  let id = useRef();

  useEffect(() => {
    id.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 2000);
    console.log("renderizando");
  }, []);

  const stopIncrement = () => {
    return clearInterval(id.current);
  };

  return (
    <>
      <p>Contador</p>
      <CounterContainer>
        <span>{count}</span>
        <CounterButton style={{ width: "5rem" }} onClick={stopIncrement}>
          Stop
        </CounterButton>
      </CounterContainer>
    </>
  );
};

export default Counter;
