import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Name from "./components/Expenses/Name";
import Expenses from "./components/Expenses/Expenses";
import Form from "./components/NewUserExpenses/Input";
import Input from "./components/NewUserExpenses/Input";

function App() {
  let initial_expenses = [
    {
      id: 1,
      date: new Date(2020, 10, 3),
      title: "Pair of shoes",
      price: Math.floor(Math.random() * 100) + 1,
    },
    {
      id: 2,
      date: new Date(2020, 10, 4),
      title: "Pair of Pants",
      price: Math.floor(Math.random() * 100) + 1,
    },
    {
      id: 3,
      date: new Date(2020, 10, 5),
      title: "Mobile phone",
      price: Math.floor(Math.random() * 100) + 1,
    },
    {
      id: 4,
      date: new Date(2020, 10, 6),
      title: "Laptop",
      price: Math.floor(Math.random() * 100) + 1,
    },
  ];

  let [expenses, changelist] = useState(initial_expenses);

  let AddNewData = (NewExpense) => {
    changelist((prevExpenses) => {
      return [...prevExpenses, NewExpense];
    });
    // console.log(expense.values);
  };

  //Below is how the code of Jsx is transformed underthe hood...
  // return React.createElement(
  //   "body",
  //   {},
  //   React.createElement(
  //     "div",
  //     { className: "App" },
  //     React.createElement("h2", {}, "Expense List..."),
  //     React.createElement(Expenses, { expense: expense })
  //   )
  // );
  return (
    <body>
      <div className="App">
        <h2>Expense List..</h2>
        <Input OnNewExpense={AddNewData}></Input>
        <Expenses expense={expenses} />
      </div>
    </body>
  );
}

export default App;
