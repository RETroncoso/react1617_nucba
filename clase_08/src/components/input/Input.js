import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";

import { InputContainerStyled, InputStyled } from "./InputStyles";

function Input(props) {
  const { handlerChange } = useContext(AuthContext);
  return (
    <InputContainerStyled>
      <InputStyled {...props} onChange={(e) => handlerChange(e)} />
    </InputContainerStyled>
  );
}

export default Input;
