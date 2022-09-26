import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  buyDonut,
  returnDonut,
  resetDonut,
} from "../../redux/donut/donutActions";

const Donut = () => {
  const CakeAvailable = useSelector((state) => state);
  const dispatch = useDispatch();
  const [donutToBuy, setDonutToBuy] = useState(1);

  const handleDonutToBuy = (event) => {
    setDonutToBuy(event.target.value);
  };

  const handleBuyDonut = () => {
    const action = buyDonut(donutToBuy);
    dispatch(action);
  };

  const handleReturnDonut = () => {
    const action = returnDonut(donutToBuy);
    dispatch(action);
  };

  const handleResetDonut = () => {
    const action = resetDonut();
    dispatch(action);
  };

  return (
    <div>
      <h1>
        <strong>Donut Store</strong>
      </h1>
      <h2>
        <strong>Donut Available : {CakeAvailable}</strong>
      </h2>

      <label>
        Donuts to Buy :
        <input
          className="border p-2 rounded-md"
          type="number"
          min={1}
          value={donutToBuy}
          onChange={handleDonutToBuy}
        />
      </label>

      <button className="border p-2 rounded-md" onClick={handleBuyDonut}>
        Buy Donut
      </button>
      <button className="border p-2 rounded-md" onClick={handleReturnDonut}>
        Return Donut
      </button>
      <button className="border p-2 rounded-md" onClick={handleResetDonut}>
        Reset Donut
      </button>
    </div>
  );
};

export default Donut;
