import { maximum } from "prelude-ls";
import React from "react";
import Chart from "../Chart/Chart";

let Expensechart = (props) => {
  let Expenses = [
    { labels: "Jan", value: 0 },
    { labels: "Feb", value: 0 },
    { labels: "Mar", value: 0 },
    { labels: "Apr", value: 0 },
    { labels: "May", value: 0 },
    { labels: "June", value: 0 },
    { labels: "July", value: 0 },
    { labels: "Aug", value: 0 },
    { labels: "Sept", value: 0 },
    { labels: "Oct", value: 0 },
    { labels: "Nov", value: 0 },
    { labels: "Dec", value: 0 },
  ];

  for (let exp of props.expenses) {
    let month = exp.date.getMonth(); //Returns 0 --> january
    Expenses[month].value += exp.price;
  }

  return <Chart datapoints={Expenses}></Chart>;
};

export default Expensechart;
