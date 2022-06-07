import React, { useContext } from "react";
import CountReducer from "../../context/CountReducer";
import { TYPES } from "../../actionTypes/countActions";
import { CounterButtonStyled } from "./AddStyles";

import { AiOutlinePlusCircle } from "react-icons/ai";
import { FaRegTimesCircle } from "react-icons/fa";
import { RiNumber5 } from "react-icons/ri";

const Add = () => {
  const [, dispatch] = useContext(CountReducer);

  const handleIncrement = () => dispatch({ type: TYPES.INCREMENT });

  const handleIncrement_5 = () => dispatch({ type: TYPES.INCREMENT_5 });

  const handleMultiplicate = () => dispatch({ type: TYPES.MULTIPLICATE });

  return (
    <>
      <CounterButtonStyled onClick={handleIncrement}>
        <AiOutlinePlusCircle size="32px" color="white" />
      </CounterButtonStyled>
      <CounterButtonStyled onClick={handleIncrement_5}>
        <p>
          +<RiNumber5 size="32px" color="white" />
        </p>
      </CounterButtonStyled>
      <CounterButtonStyled last onClick={handleMultiplicate}>
        <FaRegTimesCircle size="32px" color="white" />
      </CounterButtonStyled>
    </>
  );
};

export default Add;
