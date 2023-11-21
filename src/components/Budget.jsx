import React, { useContext } from "react";
import { AppContext } from "./AppContext";

function Budget() {
  const { budget } = useContext(AppContext);
  return (
    <div>
      <span className="bg-orange ">{budget}</span>
    </div>
  );
}

export default Budget;

// we are not hardcoding the budget now when we will chnage the budget from back this budget will automatically changes
