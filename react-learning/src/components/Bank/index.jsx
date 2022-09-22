import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { deposit, withdraw } from "../../redux/balance/balanceActions";

const Bank = () => {
  const balance = useSelector((state) => state); // used to acess the redux state
  const dispatch = useDispatch();

  const handleDeposit = () => {
    const action = deposit;
    dispatch(action);
    // setBalance((prevBal) => prevBal + 10);
  };

  const handleWithdraw = () => {
    const action = withdraw;
    dispatch(action);
    // setBalance((prevBal) => prevBal - 10);
  };

  return (
    <div>
      <h1>
        <strong>My bank Account</strong>
      </h1>
      <h2>
        <strong>Balance : ${balance}</strong>
      </h2>

      <button className="border p-2 rounded-md" onClick={handleDeposit}>
        Deposit
      </button>
      <button className="border p-2 rounded-md" onClick={handleWithdraw}>
        Withdraw
      </button>
    </div>
  );
};

export default Bank;
