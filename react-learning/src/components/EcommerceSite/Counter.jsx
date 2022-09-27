import { useDispatch, useSelector } from "react-redux";
import {
  counterIncrement,
  counterDecrement,
} from "../../redux/counter/counterActions";

const Counter = () => {
  const counter = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    const action = counterIncrement();
    dispatch(action);
  };

  const handleDecrement = () => {
    const action = counterDecrement();
    dispatch(action);
  };

  return (
    <div className="flex border-2 w-9">
      <button onClick={handleIncrement}>+</button>
      <p>{counter}</p>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
};

export default Counter;
