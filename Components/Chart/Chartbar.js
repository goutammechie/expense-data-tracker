import React, { useState } from "react";
import "./Chartbar.css";

let Chartbar = (props) => {
  let bar_height = "0%";

  if (props.maxval > 0) {
    bar_height = Math.round((props.datavalue / props.maxval) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__bar" style={{ height: bar_height }}></div>
      </div>
      <div className="chart-bar__label">{props.datalabel}</div>
    </div>
  );
};

export default Chartbar;
