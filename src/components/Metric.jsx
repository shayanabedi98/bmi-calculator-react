import React from "react";

const Metric = ({ handleChange, input, calculateMetric }) => {
  return (
    <div className="input-container">
      <form onSubmit={(e) => e.preventDefault()} action="">
        <label htmlFor="kg">Weight</label>
        <input
          placeholder={input.kg}
          onChange={handleChange}
          value={input.kg}
          required
          type="number"
          step={0.01}
          min={1}
          max={500}
          name="kg"
        />
        <label htmlFor="cm">Height</label>
        <input
          placeholder={input.cm}
          onChange={handleChange}
          value={input.cm}
          required
          type="number"
          step={0.01}
          min={1}
          max={300}
          name="cm"
        />
        <button onClick={calculateMetric}>Calculate</button>
      </form>
    </div>
  );
};

export default Metric;
