 import React, { useContext } from "react";
import { AppContext } from "./AppContext";

function Expenseitem(props) {
  const { dispatch } = useContext(AppContext);

  const DeleteBtn = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id, // this dispatch function will call the reducer to change the state
    });
  };

  return (
    <div>
      <li>{props.name}</li>

      <div>
        <span className="bg-green-400 rounded-md">{props.cost}</span>

        <button
          onClick={DeleteBtn}
          className="bg-white text-black mx-2 rounded hover:bg-sky-700 p-1
        "
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Expenseitem;
