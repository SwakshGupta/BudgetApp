import { useState } from "react";

import "./App.css";
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import NewForm from "./components/newForm";
import AppProvider from "./components/AppContext";
import SpendMoney from "./components/SpendMoney";

// we wil insert all our components inside the App provider
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-teal-700 w-[1240px] h-[500pxpx]">
        <AppProvider>
          <div className=" text-black">
            <h1 className="font-bold italic text-3xl">My budget</h1>
            <Budget />

            <Remaining />
            <SpendMoney />

            <ExpenseTotal />
            <div className="p-5">
              <h2 className="font-bold text-3xl md-4">Add Expense item</h2>
              <NewForm />
            </div>
          </div>
        </AppProvider>
      </div>
    </>
  );
}

export default App;

// we have written all the compnents inside the App provider so that all the components can acess to provider
