import React from "react";
import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px white solid;
  border-radius: 40px;
  width: 75%;
  padding: 0.5rem;
  margin-top: 0.5rem;
  height: 12rem;

  & h4 {
    font-size: 1.5rem;
    color: #b6baf4;
  }

  & :hover {
    border: dashed;
  }

  :hover {
    border: dashed;
  }
`;

// export const StyledH4 = styled.h4`
//   font-size: 1.5rem;
//   color: #b6baf4;
// `;

export const StyledP = styled.p`
  font-size: 1.25rem;
  color: #b6baf4;
`;

export const StyledPorProps = styled.h3`
  font-size: ${({ font }) => font};
  color: ${({ color }) => color};
`;
