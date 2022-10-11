import React from "react";
import "./styles.css";
import chair1 from "../../../../assets/logo/chair1.jpeg";
import chair2 from "../../../../assets/logo/chair2.jpeg";
import Button from "../../../common/Button";

function CartItems({ cartItems = [] }) {
	return (
		<div className="main-cart">
			<div className="cart-title">
				<h1>Cart</h1>
				<p className="cart-h2"> 2 items</p>
			</div>

			{cartItems.map((item) => {
				const { name, color, price, id, quantity } =
					item;
				return (
					<div className="cart-items">
						<div>
							<img
								src={chair1}
								alt="chair"
								className="chair-image"
							/>
						</div>
						<div>
							<div>
								<p className="chair-name">
									<strong>
										{
											name
										}
									</strong>
								</p>
								<p>
									<strong>
										{" "}
										<span className="chair-color">
											Color
										</span>{" "}
										<span className="chair-type">
											{
												color
											}
										</span>
									</strong>
								</p>
							</div>
							<div className="cart-buttons">
								<div className="cart-counters">
									<button>
										-
									</button>
									<p>
										{
											quantity
										}
									</p>
									<button>
										+
									</button>
								</div>
								<div>
									<Button variant="unfilled">
										Remove
									</Button>
								</div>
							</div>
						</div>
						<div className="cart-price">
							<p>
								<strong>
									{price}
								</strong>
							</p>
						</div>
					</div>
				);
			})}

			<div className="cart-banner">
				<p>
					% 10% Instant Discount with Federal Bank
					Debit Cards on a min spend of $150. TCA
				</p>
			</div>
		</div>
	);
}

export default CartItems;
