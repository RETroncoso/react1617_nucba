import React, { createContext } from "react";

export const Contexto = createContext();

export const ContextoProvider = ({ children }) => {
  return (
    <Contexto.Provider
      value={{
        colorete: "lightblue",
        tituloContexto: "Esto esta en el contexto",
      }}
    >
      {children}
    </Contexto.Provider>
  );
};
