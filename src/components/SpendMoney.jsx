import React, { useContext } from "react";
import { AppContext } from "./AppContext";

function SpendMoney() {
  const { expenses } = useContext(AppContext);

  const TotalExpense = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0); // this zero is our starting value

  return (
    <div>
      <h1 className="font-bold ita">Total = {TotalExpense}</h1>
    </div>
  );
}

export default SpendMoney;
