import { BUY, RETURNPIZZA } from "./pizzaTypes";

const initialInventory = 50;

const pizzaReducer = (inventory = initialInventory, action) => {
  switch (action.type) {
    case BUY:
      return inventory - action.payload;
    case RETURNPIZZA:
      return inventory + action.payload;
    default:
      return inventory;
  }
};

export default pizzaReducer;
