import React, { useContext } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "./AppContext";

function ExpenseTotal() {
  const { expenses } = useContext(AppContext); // we have use usecontext api to get the data
  return (
    <div>
      <ul className="flex justify-center justify-evenly p-{12} bg-black text-white rounded-md w-{1240px}">
        {expenses.map(
          (
            expense // Correctly use parentheses for JSX
          ) => (
            <ExpenseItem
              key={expense.id}
              id={expense.id}
              name={expense.name}
              cost={expense.cost}
            />
          )
        )}
      </ul>
    </div>
  );
}

export default ExpenseTotal; // we are passing expense item as a prop  as a props
