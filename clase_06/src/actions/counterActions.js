import {
  INCREMENT,
  INCREMENT_5,
  DECREMENT,
  DECREMENT_5,
  MULTIPLICATE,
  RESET,
  DIVIDE,
} from "../types/index";

export const increment = () => ({ type: INCREMENT });

export const increment_5 = () => ({ type: INCREMENT_5 });

export const multiplicate = () => ({ type: MULTIPLICATE });

export const decrement = () => ({ type: DECREMENT });

export const decrement_5 = () => ({ type: DECREMENT_5 });

export const divide = () => ({ type: DIVIDE });

export const reset = () => ({ type: RESET });
