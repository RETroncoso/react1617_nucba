import styled from "styled-components";

export const CounterContainer = styled.div`
  width: 75%;
  height: 5rem;
  border: 1px white solid;
  border-radius: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 0.5rem;
  color: white;
`;

export const CounterButton = styled.button`
  background-color: rgb(0 0 125);
  width: 3rem;
  border-radius: 50%;
  color: white;
  font-size: 2rem;

  :hover {
    cursor: pointer;
  }
`;
