import React from "react";
import Navbar from "./Navbar";

const NonAuthLayout = ({ children }) => {
	return (
		<div>
			<Navbar />
			NonAuthLayout
			{children}
		</div>
	);
};

export default NonAuthLayout;
