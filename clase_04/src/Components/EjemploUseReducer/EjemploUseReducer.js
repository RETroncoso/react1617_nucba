import React, { useReducer, useContext } from "react";
import styled from "styled-components";
import { Contexto } from "../MiContexto/MiContexto";

export const ReducerButton = styled.button`
  width: 4rem;
  height: 2.5rem;
`;

const EjemploUseReducer = () => {
  const estadoInicial = "";

  const { colorete, tituloContexto } = useContext(Contexto);

  function reducer(estado, action) {
    switch (action.type) {
      case "rojo":
        return "red";
      case "verde":
        return "green";
      case "azul":
        return "blue";
      default:
        return;
    }
  }

  const [estado, dispatch] = useReducer(reducer, estadoInicial);

  return (
    <div>
      <h2 style={{ color: colorete }}>{tituloContexto}</h2>
      <ReducerButton
        onClick={() => dispatch({ type: "rojo" })}
        style={{ backgroundColor: "red" }}
      />
      <ReducerButton
        onClick={() => dispatch({ type: "verde" })}
        style={{ backgroundColor: "green" }}
      />
      <ReducerButton
        onClick={() => dispatch({ type: "azul" })}
        style={{ backgroundColor: "blue" }}
      />
    </div>
  );
};

export default EjemploUseReducer;
