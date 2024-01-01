// App.js
import React, { useState } from "react";
import ExpenseItem from "./components/ExpenseItem";

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "Shopping",
      amount: 100,
      date: new Date(2022, 5, 15),
      locationOfExpenditure: "Mall",
    },
    {
      id: "e2",
      title: "Dining",
      amount: 50,
      date: new Date(2022, 5, 16),
      locationOfExpenditure: "Restaurant",
    },
    // Add more expenses as needed
  ]);

  return (
    <div>
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} {...expense} />
      ))}
    </div>
  );
};

export default App;
