import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { buyCake, returnCake, resetCake } from "../../redux/cake/cakeActions";

const Cake = () => {
  const CakeAvailable = useSelector((state) => state);
  const dispatch = useDispatch();
  const [cakeToBuy, setCakeToBuy] = useState(1);

  const handleCakeToBuy = (event) => {
    setCakeToBuy(event.target.value);
  };

  const handleBuyCake = () => {
    const action = buyCake(cakeToBuy);
    dispatch(action);
  };

  const handleReturnCake = () => {
    const action = returnCake(cakeToBuy);
    dispatch(action);
  };

  const handleResetCake = () => {
    const action = resetCake();
    dispatch(action);
  };

  return (
    <div>
      <h1>
        <strong>Cake Store</strong>
      </h1>
      <h2>
        <strong>Cake Available : {CakeAvailable}</strong>
      </h2>

      <label>
        Cakes to Buy :
        <input
          className="border p-2 rounded-md"
          type="number"
          min={1}
          value={cakeToBuy}
          onChange={handleCakeToBuy}
        />
      </label>

      <button className="border p-2 rounded-md" onClick={handleBuyCake}>
        Buy Cake
      </button>
      <button className="border p-2 rounded-md" onClick={handleReturnCake}>
        Return Cake
      </button>
      <button className="border p-2 rounded-md" onClick={handleResetCake}>
        Reset Cake
      </button>
    </div>
  );
};

export default Cake;
