import { BUYDONUT, RETURNDONUT, RESETDONUT } from "./donutTypes";
import { initialDonutAvailable } from "./donutReducer";

export function buyDonut(payload) {
  return {
    type: BUYDONUT,
    payload,
  };
}

export function returnDonut(payload) {
  return {
    type: RETURNDONUT,
    payload,
  };
}

export function resetDonut() {
  return {
    type: RESETDONUT,
    payload: initialDonutAvailable,
  };
}
