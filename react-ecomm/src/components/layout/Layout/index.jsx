import React, { useEffect } from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import NonAuthLayout from "./NonAuthLayout";
import AuthLayout from "./AuthLayout";
import axios from "axios";
import { setUser } from "../../../redux/users/usersActions";
import { useDispatch, useSelector } from "react-redux";

const Layout = () => {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.user);
	console.log("data", data);
	useEffect(() => {
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

		fetchData(`http://localhost:5000/profile`, controller, setUser);

		return () => {
			controller.abort();
		};
	}, []);

	if (data?.name)
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
