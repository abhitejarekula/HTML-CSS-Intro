import { COUNTERDECREMENT, COUNTERINCREMENT } from "./counterTypes";

const initialCounter = 1;

const counterReducer = (counter = initialCounter, action) => {
  switch (action.type) {
    case COUNTERINCREMENT:
      return counter + action.payload;
    case COUNTERDECREMENT:
      return counter - action.payload;
    default:
      return counter;
  }
};

export default counterReducer;
