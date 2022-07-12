import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const dummy = [
    {
      id: "e1",
      title: "Toilet paper",
      amount: 94.2,
      date: new Date(2020, 2, 23),
    },
    {
      id: "e2",
      title: "Car Insurence",
      amount: 54.2,
      date: new Date(2022, 5, 21),
    },
    {
      id: "e3",
      title: "Bill",
      amount: 194.2,
      date: new Date(2021, 2, 11),
    },
    {
      id: "e4",
      title: "Books",
      amount: 24.21,
      date: new Date(2020, 5, 23),
    },
    {
      id: "e5",
      title: "Cycle",
      amount: 94.2,
      date: new Date(2019, 2, 23),
    },
  ];
  const [expenses, setExpenses] = useState(dummy);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
