import React, { useState } from "react";
import styled from "styled-components";

const ClickButton = styled.button`
  width: 3.5rem;
  height: 2.5rem;
  background-color: blue;
  color: white;
  border-radius: 25%;
  margin-top: 2rem;
`;

const EjemploOnClick = () => {
  const [isToggle, setIsToggle] = useState(true);

  const handlerToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <>
      {isToggle ? (
        <span style={{ color: "white" }}>Es True</span>
      ) : (
        <span style={{ color: "white" }}>Es False</span>
      )}
      <ClickButton onClick={handlerToggle}>Toggle</ClickButton>
    </>
  );
};

export default EjemploOnClick;
