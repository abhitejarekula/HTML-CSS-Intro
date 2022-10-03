import { INCREASE, DECREASE } from "./counterTypes";

const initialBalance = 1;

const counterReducer = (balance = initialBalance, action) => {
	switch (action.type) {
		case INCREASE:
			return balance + action.payload;
		case DECREASE:
			return balance - action.payload;
		default:
			return balance;
	}
};

export default counterReducer;
