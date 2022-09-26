import { BUYCAKE, RETURNCAKE, RESETCAKE } from "./cakeTypes";

export const initialCakeAvailable = 50;

const cakeReducer = (cakeAvailable = initialCakeAvailable, action) => {
  switch (action.type) {
    case BUYCAKE:
      return cakeAvailable - action.payload;
    case RETURNCAKE:
      return cakeAvailable + parseInt(action.payload);
    case RESETCAKE:
      return action.payload;
    default:
      return cakeAvailable;
  }
};

export default cakeReducer;

// 1. When reset cake is clicked an action is dispatched
