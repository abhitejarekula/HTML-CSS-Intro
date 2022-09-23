import { BUYCAKE, RETURNCAKE, RESETCAKE } from "./cakeTypes";

const initialCakeAvailable = 50;

const cakeReducer = (CakeAvailable = initialCakeAvailable, action) => {
  switch (action.type) {
    case BUYCAKE:
      return CakeAvailable - action.payload;
    case RETURNCAKE:
      return CakeAvailable + parseInt(action.payload);
    case RESETCAKE:
      return (CakeAvailable = initialCakeAvailable);
    default:
      return CakeAvailable;
  }
};

export default cakeReducer;
