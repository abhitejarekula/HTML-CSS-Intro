import React from "react";
import OrderSummary from "../../components/common/order/OrderSummary";
import CartItems from "../../components/pages/cart/CartItems";

import "./styles.css";

const Cart = () => {
	return (
		<div className="cart-container">
			<div className="cart-left">
				<CartItems />
			</div>
			<div className="cart-right">
				<OrderSummary />
			</div>
		</div>
	);
};

export default Cart;
