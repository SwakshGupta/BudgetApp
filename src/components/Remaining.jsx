import React, { useContext } from "react";
import { AppContext } from "./AppContext";

const Remaining = () => {
  const { expenses, budget } = useContext(AppContext);

  const TotalExpense = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  return (
    <div>
      <span className="bg-black text-white   font-bold">
        Remaining {budget - TotalExpense}
      </span>
    </div>
  );
};

export default Remaining;
