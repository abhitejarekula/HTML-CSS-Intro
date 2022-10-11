import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducers";
import usersReducers from "./users/usersReducers";

const rootReducer = combineReducers({
	user: usersReducers,
	carts: cartReducer,
});

export default rootReducer;
