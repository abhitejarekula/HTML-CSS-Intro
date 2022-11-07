import { SetCart } from "./cartType";

// export const setCart = (payload) => ({ type: SetCart, payload });

export function setCart(payload) {
	return {
		type: SetCart,
		payload,
	};
}
