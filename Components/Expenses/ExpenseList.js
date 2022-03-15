import React, { useState } from "react";
import "./ExpenseList.css";
import Name from "./Name";

let ExpenseList = (props) => {
  if (props.expense.length === 0) {
    return <p>No expense yet</p>;
  }
  return (
    <ul>
      {props.expense.length == 0 && <p>There is no expense yet.</p>}
      {props.expense.length > 0 &&
        props.expense.map((expen) => {
          return (
            <Name
              title={expen.title}
              date={expen.date}
              price={expen.price}
            ></Name>
          );
        })}
      )
    </ul>
  );
};
export default ExpenseList;
