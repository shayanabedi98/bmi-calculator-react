import React from "react";

const Systems = ({ handleActive, active }) => {
  return (
    <div className="systems">
      <button style={{ backgroundColor: active.metric ? '#00b3b3' : '#008080'}} onClick={() => handleActive("metric")}>Metric</button>
      <button style={{ backgroundColor: active.imperial ? '#00b3b3' : '#008080'}} onClick={() => handleActive("imperial")}>Imperial</button>
    </div>
  );
};
export default Systems;
