import React from "react";
import misEstilos from "./EjemploModule.module.css";

const EjemploModule = () => {
  return (
    <div className={misEstilos.contenedorModule}>
      <p className={misEstilos.parrafoModule}>Este es un ejemplo con module</p>
    </div>
  );
};

export default EjemploModule;
