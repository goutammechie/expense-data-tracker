import React, { useState } from "react";
import "./Expense_filter.css";

let Filter = (props) => {
  let [year, SetYear] = useState(2018);

  let year_change_handler = (evt) => {
    console.log(evt.target.value);
    props.onFilter(evt.target.value);
  };
  return (
    <div className="expense_filter">
      <select onChange={year_change_handler} className="expense_filter_filter">
        <option>2018</option>
        <option>2019</option>
        <option>2020</option>
        <option>2021</option>
        <option>2022</option>
        <option>2023</option>
      </select>
    </div>
  );
};
export default Filter;
