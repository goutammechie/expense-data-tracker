import React, { useState } from "react";
import Chartbar from "./Chartbar";
import "./Chart.css";

let Chart = (props) => {
  let pricevalues = props.datapoints.map((data) => {
    return data.value;
  });

  let max = Math.max(...pricevalues);

  return (
    <div className="chart">
      {/* basically, in chart component, we are displaying different values of the expenses. Thus we recieve a set of values which are displayed for each month. */}
      {props.datapoints.map((data) => {
        return (
          <Chartbar
            datavalue={data.value}
            maxval={max}
            datalabel={data.labels}
          ></Chartbar>
        );
      })}
    </div>
  );
};

export default Chart;
