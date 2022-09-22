//This is my action creator
import { DEPOSIT, WITHDRAW } from "./balanceTypes";

export function deposit() {
  //returns action object,payload is optional
  return {
    type: DEPOSIT,
    payload: 10,
  };
}

// function withdraw () {

//     //returns action object
//     return {
//         type : WITHDRAW,
//         payload : 10

//     }
// }

export const withdraw = () => ({ type: WITHDRAW, payload: 10 });
