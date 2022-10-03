import { INCREASE, DECREASE } from "./counterTypes";

export const increase = () => ({ type: INCREASE, payload: 1 });

export const decrease = () => ({ type: DECREASE, payload: 1 });
