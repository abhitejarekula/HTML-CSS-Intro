import React from "react";
import { Outlet } from "react-router-dom";

const Auth = () => {
	return (
		<div>
			Auth Container
			<Outlet />
		</div>
	);
};

export default Auth;
