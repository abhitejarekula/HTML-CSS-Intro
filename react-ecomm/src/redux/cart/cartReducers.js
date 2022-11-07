import { SetCart } from "./cartType";

const initialState = { cartItems: {} };

const cartReducer = (state = initialState, action) => {
	const { payload, type } = action;

	switch (type) {
		case SetCart:
			return payload;

		default:
			return state;
	}
};

export default cartReducer;
