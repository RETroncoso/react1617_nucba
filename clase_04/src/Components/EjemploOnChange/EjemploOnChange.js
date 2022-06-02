import React, { useState } from "react";
import styled from "styled-components";

const InputForm = styled.input`
  height: 2rem;
  width: 75%;
  background-color: transparent;
  border-bottom: 1px solid lightblue;
  color: white;
  margin-top: 2rem;
`;

const EjemploOnChange = () => {
  const [valor, setValor] = useState();

  const cambiaValor = (e) => {
    setValor(e.target.value);
  };

  return (
    <div>
      <span style={{ color: "white" }}>{valor || "El input esta vacio"}</span>
      <InputForm onChange={cambiaValor} placeholder="Cambia mi value" />
    </div>
  );
};

export default EjemploOnChange;
