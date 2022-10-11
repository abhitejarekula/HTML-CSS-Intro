import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../redux/users/usersActions";

const Home = () => {
	const data = useSelector((state) => state.user);

	return (
		<div>
			{data?.name ? (
				<div>
					<p>User is Logged In</p>
					<p>User: {data.name}</p>
				</div>
			) : (
				<p>Not Authenticated</p>
			)}
		</div>
	);
};

export default Home;
