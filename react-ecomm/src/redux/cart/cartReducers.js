import { SetCart } from "./cartType";

const initialState = { cartItems: {} };

const cartReducer = (state = initialState, action) => {
	const { payload, type } = action;

	switch (type) {
		case SetCart: {
			return {
				...state,
				cartItems: payload,
			};
		}

		default:
			return state;
	}
};

export default cartReducer;
