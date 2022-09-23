import { BUY, RETURNPIZZA } from "./pizzaTypes";

export function buyPizza() {
  return {
    type: BUY,
    payload: 1,
  };
}

export function returnPizza() {
  return {
    type: RETURNPIZZA,
    payload: 1,
  };
}
