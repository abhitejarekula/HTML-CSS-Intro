import { BUYDONUT, RETURNDONUT, RESETDONUT } from "./donutTypes";

export const initialDonutAvailable = 150;

const donutReducer = (donutAvailable = initialDonutAvailable, action) => {
  switch (action.type) {
    case BUYDONUT:
      return donutAvailable - action.payload;
    case RETURNDONUT:
      return donutAvailable + parseInt(action.payload);
    case RESETDONUT:
      return action.payload;
    default:
      return donutAvailable;
  }
};

export default donutReducer;
