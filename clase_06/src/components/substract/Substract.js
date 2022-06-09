import React from "react";

import { useDispatch } from "react-redux";

import { FiDivideCircle } from "react-icons/fi";
import { RiNumber5 } from "react-icons/ri";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { CounterButtonStyled } from "./SubstractStyles";
import { decrement, decrement_5, divide } from "../../actions/counterActions";

const Substract = () => {
  const dispatch = useDispatch();

  return (
    <>
      <CounterButtonStyled onClick={() => dispatch(divide())} last>
        <FiDivideCircle size="32px" color="white" />
      </CounterButtonStyled>
      <CounterButtonStyled onClick={() => dispatch(decrement_5())}>
        <p>
          -<RiNumber5 size="32px" color="white" />
        </p>
      </CounterButtonStyled>
      <CounterButtonStyled onClick={() => dispatch(decrement())}>
        <AiOutlineMinusCircle size="32px" color="white" />
      </CounterButtonStyled>
    </>
  );
};

export default Substract;
