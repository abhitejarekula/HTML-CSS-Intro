import { usestate } from "react";

const Pizza = () => {
  const [Inventory, setInventory] = usestate(50);

  const handleBought = () => {
    setInventory((prevInv) => prevInv - 1);
  };

  const handleReturned = () => {
    setInventory((prevInv) => prevInv + 1);
  };

  return (
    <div>
      <h1>
        <strong>Pizza Store</strong>
      </h1>
      <h2>
        <strong>Inventory : ${Inventory}</strong>
      </h2>

      <button className="border p-2 rounded-md" onClick={handleBought}>
        Bought
      </button>
      <button className="border p-2 rounded-md" onClick={handleReturned}>
        Returned
      </button>
    </div>
  );
};

export default Pizza;
