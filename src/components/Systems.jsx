import React from "react";

const Systems = ({ handleActive }) => {
  return (
    <div className="systems">
      <button onClick={() => handleActive("metric")}>Metric</button>
      <button onClick={() => handleActive("imperial")}>Imperial</button>
    </div>
  );
};
export default Systems;
