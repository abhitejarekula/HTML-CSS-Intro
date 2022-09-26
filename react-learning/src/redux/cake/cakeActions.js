import { BUYCAKE, RETURNCAKE, RESETCAKE } from "./cakeTypes";
import { initialCakeAvailable } from "./cakeReducer";

export function buyCake(payload) {
  return {
    type: BUYCAKE,
    payload,
  };
}

export function returnCake(payload) {
  return {
    type: RETURNCAKE,
    payload,
  };
}

export function resetCake() {
  return {
    type: RESETCAKE,
    payload: initialCakeAvailable,
  };
}
