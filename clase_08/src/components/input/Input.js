import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { InputContainerStyled, InputStyled } from "./InputStyles";

function Input(props) {
  return (
    <InputContainerStyled>
      <InputStyled {...props} />
    </InputContainerStyled>
  );
}

export default Input;
