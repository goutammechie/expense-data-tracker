import "./Input.css";
import Form from "./Form";
import Show from "./Show";
import { useState } from "react";
let Input = (props) => {
  let AddnewExpense = (NewData) => {
    let newdata = { ...NewData, id: Math.floor(Math.random() * 10) + 1 };
    console.log(newdata);
    props.OnNewExpense(newdata);
  };
  let [state, ChangeStateHandler] = useState(0);
  let ChangeState = (stateval) => {
    console.log(stateval);
    ChangeStateHandler(stateval);
  };

  return (
    <div className="new-expense">
      {/* For passing data from child to parent, we first create a custom event and there we pass our new function. */}
      {/* Then, we pass this function to child component. There we call that compnent while passing data from child class. */}
      <Show
        status={state}
        onChangeState={ChangeState}
        onNewExpenses={AddnewExpense}
      ></Show>
    </div>
  );
};

export default Input;
