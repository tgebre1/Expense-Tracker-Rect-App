import React, { useState } from "react";

import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
// import Expenses from "./Components/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 8.5,
    date: new Date(2021, 11, 30),
  },
  {
    id: "e2",
    title: "Car Insurance",
    amount: 350.86,
    date: new Date(2021, 12, 1),
  },
  {
    id: "e3",
    title: "New Desk",
    amount: 294.67,
    date: new Date(2021, 12, 5),
  },
  {
    id: "e4",
    title: "Travel Expense",
    amount: 1500,
    date: new Date(2021, 12, 6),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

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
};

export default App;
