import { createStore } from "redux";
import cakeReducer from "./cake/cakeReducer";
// import pizzaReducer from "./pizza/pizzaReducer";
// import balanceReducer from "./balance/balanceReducer";

// redux global state store
// const store = createStore(balanceReducer);
// const store = createStore(pizzaReducer);
const store = createStore(cakeReducer);

export default store;
