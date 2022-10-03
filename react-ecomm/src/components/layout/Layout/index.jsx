import React from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import NonAuthLayout from "./NonAuthLayout";
import AuthLayout from "./AuthLayout";

const Layout = () => {
	const [auth, setAuth] = useState(false);

	if (!auth)
		return (
			<NonAuthLayout>
				<Outlet />
			</NonAuthLayout>
		);

	return (
		<AuthLayout>
			<Outlet />
		</AuthLayout>
	);
};

export default Layout;
