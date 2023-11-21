import React, { createContext, useReducer } from "react";
import NewForm from "./newForm";
import Expenseitem from "./ExpenseItem";

// here we have defined reducer with two actions one is add item and other is delete item

// action have two property and payload property and payload property to carry data for action

const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state, // this is copying the existing state  of expense
        expenses: [...state.expenses, action.payload], // mow it is adding the existing state with  payload
      };

    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };

    default: {
      return state;
    }
  }
};

const initialState = {
  // here we have defined the inital state for our react reducer
  budget: 1200,
  expenses: [
    {
      id: 12,
      name: "shopping",
      cost: 40,
    },
    {
      id: 13,
      name: "parking",
      cost: 40,
    },
    {
      id: 14,
      name: "Grocery",
      cost: 90,
    },
  ],
};

export const AppContext = createContext(); // this is our  context our warehouse

const AppProvider = (props) => {
  // it holds the state and pass it to other components to hold the state we will use use reducer hook
  // Add 'props' as an argument
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // this will connect our state to the reducer

  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );

  // dispatch function helps to dispact the action which will trigger the reducer to change state

  // these value are passed as props to other components
};

// we have three things inside our  provider so we will make three sepreate components fo them budget.jsx

export default AppProvider;

// in this code we will define the use reducer it has reducer function and initial state
// through AppConntext.provider we will provide value to other components
