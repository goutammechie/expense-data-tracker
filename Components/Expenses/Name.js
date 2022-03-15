import "./ExpenseItem.css";
import ExpenseCalen from "../Expenses/ExpenseCalen";
import Card from "../Display/Card";
import React, { useState } from "react";
import { react } from "@babel/types";

function Name(props) {
  const [InitialTitle, ChangeTitleFunction] = useState(props.title);

  // const title = "By shirt";
  // const price = Math.floor(Math.random() * 100) + 10;
  return (
    <Card className="main">
      <div className="expense-item">
        <ExpenseCalen date={props.date} />
        <div className="expense-item__description">
          <h2>{InitialTitle}</h2>
          <div className="expense-item__price">{props.price}₹</div>
        </div>
      </div>
    </Card>
  );
}

export default Name;
