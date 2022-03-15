import React, { useState } from "react";
import "./Input.css";
import "./Form.css";
let Form = (props) => {
  // const [enteredtitle, ChangeTitle] = useState("");
  // const [enteredPrice, ChangePrice] = useState("");
  // const [enteredDate, ChangeDate] = useState("");

  // let changehandler = (evt) => {
  //   ChangeTitle(evt.target.value);
  // };

  // let changePrice = (evt) => {
  //   ChangePrice(evt.target.value);
  // };

  // let changeDate = (evt) => {
  //   ChangeDate(evt.target.value);
  // };
  let [Initialvalue, changeInitialvalue] = useState({
    startTitle: "",
    startPrice: "",
    startDate: "",
  });

  let submithandler = (evt) => {
    evt.preventDefault();
    let yy = Initialvalue.startDate.slice(0, 4);
    let mm = Initialvalue.startDate.slice(5, 7);
    let dd = Initialvalue.startDate.slice(8, 11);
    let date = new Date(yy, mm, dd);
    console.log(date);
    let newData = {
      title: Initialvalue.startTitle,
      price: Initialvalue.startPrice,
      date: date,
    };
    console.log(newData.date);
    props.onAddFormData(newData);

    changeInitialvalue({
      startTitle: "",
      startDate: "",
      startPrice: "",
    });
    HideForm();
  };

  let HideForm = () => {
    console.log(0);
    props.onHideForm(0);
  };
  //Below, to make sure every state updates, we use a bit of naive javascript;

  let changehandler = (evt) => {
    changeInitialvalue((prevstate) => {
      return { ...prevstate, startTitle: evt.target.value };
    });
  };

  let changePrice = (evt) => {
    changeInitialvalue((prevstate) => {
      return { ...prevstate, startPrice: evt.target.value };
    });
  };

  let changeDate = (evt) => {
    changeInitialvalue((prevstate) => {
      return { ...prevstate, startDate: evt.target.value };
    });
  };

  //Above, when catogorizing muliples updates into a single, we pass an initial object rather than initial value.
  return (
    <form onSubmit={submithandler}>
      {/* <h1>The current title is: {Initialvalue.startTitle}</h1> */}
      <div className="mainform">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            id="change_task"
            type="text"
            value={Initialvalue.startTitle}
            onChange={changehandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input
            type="number"
            step="0.01"
            min="0"
            max="100"
            value={Initialvalue.startPrice}
            onChange={changePrice}
          />
        </div>
        <div className="new-expense__control">
          <label>Purchase Date</label>
          <input
            type="date"
            value={Initialvalue.startDate}
            onChange={changeDate}
          />
        </div>
      </div>
      <button className="new-expense__submit">Add Expense</button>
      <button className="new-expense__submit" onClick={HideForm} type="button">
        Cancel
      </button>
    </form>
  );
};
export default Form;
