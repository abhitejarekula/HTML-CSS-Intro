import React from "react";
import "./styles.css";
import chair1 from "../../../../assets/logo/chair1.jpeg";
import Button from "../../../common/Button";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../../../redux/cart/cartActions";

function CartItems({ cartItems = [] }) {
	const dispatch = useDispatch();
	const carts = useSelector(({ carts }) => carts);

	const onIncHandler = (id) => {
		const newCart = cartItems.map((item) => {
			if (item.id === id) {
				return {
					...item,
					quantity: item.quantity + 1,
				};
			}
			return item;
		});
		console.log(newCart);
		const payload = { id: carts.id, items: newCart };
		dispatch(setCart(payload));
	};

	console.log(carts);

	const onDecHandler = (id) => {
		const newCart = cartItems.map((item) => {
			if (item.id === id) {
				return {
					...item,
					quantity: item.quantity - 1,
				};
			}
			return item;
		});
		console.log(newCart);
		const payload = { id: carts.id, items: newCart };
		dispatch(setCart(payload));
	};

	const onRemove = (id) => {
		const newCart = cartItems.filter((item) => item.id !== id);
		console.log(newCart);
		const payload = { id: carts.id, items: newCart };
		dispatch(setCart(payload));
	};
	return (
		<div className="main-cart">
			<div className="cart-title">
				<h1>Cart</h1>
				<p className="cart-h2"> 2 items</p>
			</div>

			{cartItems.map((items) => {
				const { name, color, price, id, quantity } =
					items;
				return (
					<div className="cart-items" key={id}>
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
									<button
										onClick={() =>
											onDecHandler(
												items.id
											)
										}
										disabled={
											quantity ==
											1
										}
									>
										-
									</button>
									<p>
										{
											quantity
										}
									</p>
									<button
										onClick={() =>
											onIncHandler(
												items.id
											)
										}
									>
										+
									</button>
								</div>
								<div>
									<Button
										variant="unfilled"
										onClick={() =>
											onRemove(
												items.id
											)
										}
									>
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
