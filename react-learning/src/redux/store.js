import { createStore } from "redux";
import balanceReducer from "./balance/balanceReducer";

// redux global state store
const store = createStore(balanceReducer);

export default store;
