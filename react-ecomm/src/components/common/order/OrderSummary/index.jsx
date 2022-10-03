import React from "react";
import Button from "../../Button";
import "./styles.css";

const OrderSummary = () => {
	const content = [
		{
			id: 1,
			name: "Price",
			value: 319.98,
			className: "values",
		},
		{
			id: 2,
			name: "Discount",
			value: 31.98,
			className: "values",
		},
		{
			id: 3,
			name: "Shipping",
			value: "Free",
			className: "value-free",
		},
		{
			id: 4,
			name: "Coupon Applied",
			value: 0.0,
			className: "values",
		},
	];
	return (
		<div className="summary-container">
			<h1 className="title">
				<strong>Order Summary</strong>
			</h1>

			<div className="summary-box">
				<div className="content">
					{content.map(
						({
							id,
							name,
							value,
							className,
						}) => (
							<>
								<span key={id}>
									{name}
								</span>
								<span
									className={
										className
									}
								>
									${value}
								</span>
							</>
						)
					)}
				</div>

				<hr />

				<div className="content">
					<span>Total</span>
					<span className="values">$318.98</span>
				</div>

				<div className="content">
					<span>
						Estimated Delivery by{" "}
						<span>01 fed 2021</span>
					</span>
				</div>

				<div className="coupon-code">
					<input
						type="text"
						placeholder="Coupon Code"
					/>
				</div>

				<br />

				<div>
					<Button className="check-out">
						Proceed to CheckOut
					</Button>
				</div>
			</div>
		</div>
	);
};

export default OrderSummary;
