import { INCREASE, DECREASE } from "./counterTypes";

export const increase = (payload) => ({ type: INCREASE, payload });

export const decrease = (payload) => ({ type: DECREASE, payload });
