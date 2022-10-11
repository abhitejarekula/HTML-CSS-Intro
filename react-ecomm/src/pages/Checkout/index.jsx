import React from "react";
import OrderSummary from "../../components/common/order/OrderSummary";
import CheckOut from "../../components/pages/CheckOut";

import "./styles.css";

const Checkout = () => {
	return (
		<div className="cart-container">
			<div className="cart-left">
				<CheckOut />
			</div>
			<div className="cart-right">
				<OrderSummary buttonText="PLACE ORDER" />
			</div>
		</div>
	);
};

export default Checkout;
