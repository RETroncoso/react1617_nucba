import React from "react";
import "./AppWrapper.css";

const AppWrapper = ({ children }) => {
  return <div className="contenedorModule">{children}</div>;
};

export default AppWrapper;
