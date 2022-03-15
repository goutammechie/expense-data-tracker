import "./ExpenseCalen.css";
import Card from "../Display/Card";

function ExpenseCalen(props) {
  let month = props.date.toLocaleString("en-US", { month: "long" });
  let day = props.date.toLocaleString("en-US", { day: "numeric" });
  let year = props.date.toLocaleString("en-US", { year: "numeric" });
  console.log(props.date);
  return (
    <Card className="calen">
      <div className="date">{day}</div>
      <div className="month">{month}</div>
      <div className="year">{year}</div>
    </Card>
  );
}

export default ExpenseCalen;
