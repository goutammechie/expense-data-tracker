import Name from "./Name";
import "./Expense.css";
import Card from "../Display/Card";
import Filter from "./Expensefilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList";
import Expensechart from "./Expensechart";

function Expenses(props) {
  let [expenses_, changeexpense] = useState(props.expense);

  let FilterYear = (year) => {
    let arr = props.expense.filter((obj) => {
      return obj.date.getFullYear().toString() === year;
    });
    console.log(arr);
    changeexpense(arr);
  };

  console.log("My expenses: " + expenses_);
  return (
    <list>
      <Card className="expense">
        <Filter onFilter={FilterYear}></Filter>
        <Expensechart expenses={expenses_}></Expensechart>
        <ExpenseList expense={expenses_} />
      </Card>
    </list>
  );
}
export default Expenses;
// let message = <p>There are no expenses yet.</p>;

// if (expenses_.length > 0) {
//   message = expenses_.map((expense) => {
//     <Name
//       title={expense.title}
//       date={expense.date}
//       price={expense.price}
//     ></Name>;
//   });
// }
