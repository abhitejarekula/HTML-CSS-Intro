import React, { useEffect } from "react";
import axios from "axios";

const DataContainer = ({ counter }) => {
	const [loading, setLoading] = React.useState(true);
	const [data, setData] = React.useState({});

	useEffect(() => {
		setLoading(true);
		console.log(
			"step 1: data container mounting, running useEffect to fetch data"
		);
		const controller = new AbortController();

		async function fetchData(url, controller) {
			try {
				const response = await axios.get(url, {
					signal: controller.signal,
				});
				console.log(
					"step 3: response has been retrieved, setting data now",
					response
				);
				setData(response.data);
				setLoading(false);
			} catch (error) {
				console.log(error);
			}
		}

		fetchData(
			`https://jsonplaceholder.typicode.com/users/${counter}`,
			controller
		);

		console.log("step 2: waiting for data to be returned");

		return () => {
			// cleanup function
			console.log(
				"FINAL step: container about to unmount, cleaning up"
			);
			console.log("abort async call");
			controller.abort();
		};
	}, [counter]);

	if (loading) {
		return <div className="bg-blue-500 w-full h-full"></div>;
	}

	return (
		<div className="border border-black w-1/2 h-80">
			<h1>
				<strong>{counter}</strong>
			</h1>
			{data?.name}
			{/* {data.map((el) => {
                return (<div key={el.id}>{el.name}</div>)
            })} */}
		</div>
	);
};

export default DataContainer;
