import React, { useState } from "react";
import Form from "./Form";
import "./Show.css";

let Show = (props) => {
  let click = () => {
    console.log("Clicked");
    console.log(props.status);
    props.onChangeState(1);
  };

  let AddData = (NewFormData) => {
    console.log(NewFormData);
    props.onNewExpenses(NewFormData);
  };

  let HideForm = (value) => {
    console.log(value);
    props.onChangeState(0);
  };

  if (props.status == 0) {
    return (
      <div>
        <button className="add_form" onClick={click}>
          Add Expense
        </button>
      </div>
    );
  }
  return (
    <div>
      <Form onAddFormData={AddData} onHideForm={HideForm}></Form>
    </div>
  );
};

export default Show;
