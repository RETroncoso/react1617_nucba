import React from "react";
import styled from "styled-components";

const ContChico = styled.div`
  height: 50%;
  width: 75%;
  padding: 2rem;
  border: 1px white solid;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContenedorChico = ({ children }) => {
  return <ContChico>{children}</ContChico>;
};

export default ContenedorChico;
