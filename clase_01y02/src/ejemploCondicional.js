import React from "react";
import { useState } from "react";
import { EjemploFuncional, EjemploFuncional2 } from "./ejemplofuncional";

const EjemploCondicional = () => {
  const [mostrar, setMostrar] = useState(true);

  return (
    <div>{mostrar ? <EjemploFuncional texto="Esto está en true" /> : ""}</div>
  );
};

export default EjemploCondicional;
