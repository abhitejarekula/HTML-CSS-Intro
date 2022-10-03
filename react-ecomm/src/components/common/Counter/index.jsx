import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "../../../redux/cartCounter/counterActions";

const Counter = () => {
	const inventory = useSelector((state) => state);
	const dispatch = useDispatch();

	const handleIncrease = () => {
		const action = increase;
		dispatch(action);
	};

	const handleDecrease = () => {
		const action = decrease();
		dispatch(action);
	};

	return (
		<div>
			<button onClick={handleDecrease}>-</button>
			<p>{counter}</p>
			<button onClick={handleIncrease}>+</button>
		</div>
	);
};

export default Counter;
