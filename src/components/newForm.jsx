import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import { AppContext } from "./AppContext";

// here we will add an expense inour data
function NewForm() {
  const formStyle = {
    maxWidth: "300px",
    margin: "0 auto",
    padding: "20px",

    borderRadius: "5px",
    textAlign: "center",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "5px",
  };

  const inputStyle = {
    width: "100%",
    padding: "8px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  };

  const buttonStyle = {
    backgroundColor: "black",
    color: "white",
    borderRadius: "5px",
    padding: "10px 20px",
    border: "none",
    cursor: "pointer",
  };

  const [name, setname] = useState(""); // we will be using two use state function since we want to add only name and cost
  const [cost, setcost] = useState("");

  const { dispatch } = useContext(AppContext);

  const clicked = () => {
    event.preventDefault(); // this will prevent the page from reloading when the button is clicked

    const expense = {
      // this uuidv4(  ) will generate a unique id
      id: uuidv4(),
      name: name,
      cost: parseInt(cost), // it converts string into an integer
    };

    // here we will create a dispatch object  which will give intro to reducer to change state

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  }; // now every button is clicked expense object is created

  return (
    <div>
      <form style={formStyle}>
        <div>
          <label htmlFor="name" style={labelStyle}>
            Name:
          </label>
          <input
            type="text"
            id="name"
            style={inputStyle}
            value={name}
            onChange={(e) => {
              setname(e.target.value); // when input is written then that input will be saved in the name
            }}
          />
        </div>

        <div>
          <label htmlFor="cost" style={labelStyle}>
            Cost:
          </label>
          <input
            type="text"
            id="cost"
            style={inputStyle}
            value={cost}
            onChange={(e) => setcost(e.target.value)}
          />
        </div>

        <button style={buttonStyle} onClick={clicked}>
          Save
        </button>
      </form>
    </div>
  );
}

export default NewForm;
