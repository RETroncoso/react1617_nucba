import React from "react";

import { useDispatch } from "react-redux";

import {
  increment,
  increment_5,
  multiplicate,
} from "../../actions/counterActions";

import { CounterButtonStyled } from "./AddStyles";

import { AiOutlinePlusCircle } from "react-icons/ai";
import { FaRegTimesCircle } from "react-icons/fa";
import { RiNumber5 } from "react-icons/ri";

const Add = () => {
  const dispatch = useDispatch();

  return (
    <>
      <CounterButtonStyled onClick={() => dispatch(increment())}>
        <AiOutlinePlusCircle size="32px" color="white" />
      </CounterButtonStyled>
      <CounterButtonStyled onClick={() => dispatch(increment_5())}>
        <p>
          +<RiNumber5 size="32px" color="white" />
        </p>
      </CounterButtonStyled>
      <CounterButtonStyled onClick={() => dispatch(multiplicate())} last>
        <FaRegTimesCircle size="32px" color="white" />
      </CounterButtonStyled>
    </>
  );
};

export default Add;
