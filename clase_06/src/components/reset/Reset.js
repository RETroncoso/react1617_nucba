import React from "react";
import { useDispatch } from "react-redux";

import { BiReset } from "react-icons/bi";
import { reset } from "../../actions/counterActions";

const Reset = () => {
  const dispatch = useDispatch();

  return (
    <BiReset
      onClick={() => dispatch(reset())}
      cursor="pointer"
      size="38px"
      color="#F24C4C"
    />
  );
};

export default Reset;
