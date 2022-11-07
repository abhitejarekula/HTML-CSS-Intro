import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import OrderSummary from "../../components/common/order/OrderSummary";
import CartItems from "../../components/pages/cart/CartItems";
import { setCart } from "../../redux/cart/cartActions";

import "./styles.css";

const Cart = () => {
	const dispatch = useDispatch();
	const user = useSelector(({ user }) => user);
	const carts = useSelector(({ carts }) => carts);

	let navigate = useNavigate();

	useEffect(() => {
		if (!user?.name) {
			return;
		}

		const controller = new AbortController();

		async function fetchData(url, controller, actionCreator) {
			try {
				const response = await axios.get(url, {
					signal: controller.signal,
				});
				dispatch(actionCreator(response.data));
				console.log(response);
			} catch (error) {
				console.log(error);
			}
		}

		fetchData(
			`http://localhost:3001/carts/${user.cartId}`,
			controller,
			setCart
		);

		return () => {
			controller.abort();
		};
	}, []);

	return (
		<div className="cart-container">
			<div className="cart-left">
				<CartItems cartItems={carts?.items} />
			</div>
			<div className="cart-right">
				<OrderSummary
					buttonText="PROCEED TO CHECKOUT"
					onClick={() => navigate("/checkout")}
				/>
			</div>
		</div>
	);
};

export default Cart;
