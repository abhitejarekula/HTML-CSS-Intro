import { useDispatch, useSelector } from "react-redux";
import { buyPizza, returnPizza } from "../../redux/pizza/pizzaActions";

const Pizza = () => {
  const inventory = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleBuy = () => {
    const action = buyPizza();
    dispatch(action);
  };

  const handleReturn = () => {
    const action = returnPizza();
    dispatch(action);
  };

  return (
    <div>
      <h1>
        <strong>Pizza Store</strong>
      </h1>
      <h2>
        <strong>Inventory : {inventory}</strong>
      </h2>

      <button className="border p-2 rounded-md" onClick={handleBuy}>
        Buy
      </button>
      <button className="border p-2 rounded-md" onClick={handleReturn}>
        Return
      </button>
    </div>
  );
};

export default Pizza;
