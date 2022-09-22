// state reducer function. Each state has its own reducder function.
//A reducer function is a pure function (no side effects or mutations)
//based on the action passed into the reducer, it will update the state.

import { DEPOSIT, WITHDRAW } from "./balanceTypes";

//balance is your state

const initialBalance = 100;

const balanceReducer = (balance = initialBalance, action) => {
  switch (action.type) {
    case DEPOSIT:
      return balance + action.payload;
    case WITHDRAW:
      return balance - action.payload;
    default:
      return balance;
  }
};

export default balanceReducer;
