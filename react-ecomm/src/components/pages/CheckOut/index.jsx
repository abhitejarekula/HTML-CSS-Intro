import React from "react";
import Container from "./Container";
import AddButton from "./AddButton";
import TitleHeader from "./TitleHeader";

function CheckOut() {
	return (
		<div>
			<TitleHeader />
			<Container />

			<hr />

			<AddButton />
		</div>
	);
}

export default CheckOut;
