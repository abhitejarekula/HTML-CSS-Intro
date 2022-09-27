import { COUNTERDECREMENT, COUNTERINCREMENT } from "./counterTypes";

export function counterIncrement() {
  return {
    type: COUNTERINCREMENT,
    payload: 1,
  };
}

export function counterDecrement() {
  return {
    type: COUNTERDECREMENT,
    payload: 1,
  };
}
