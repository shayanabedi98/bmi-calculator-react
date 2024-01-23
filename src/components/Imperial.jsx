import React from "react";

const Imperial = ({ handleChange, input, calculateImperial }) => {
  return (
    <div className="input-container">
      <form onSubmit={(e) => e.preventDefault()} action="">
        <label htmlFor="lbs">Weight</label>
        <input
          placeholder={input.lbs}
          onChange={handleChange}
          value={input.lbs}
          required
          type="number"
          step={0.01}
          min={1}
          max={500}
          name="lbs"
        />
        <label htmlFor="inch">Height</label>
        <input
          placeholder={input.inch}
          onChange={handleChange}
          value={input.inch}
          required
          type="number"
          step={0.01}
          min={0}
          max={11}
          name="inch"
        />
        <label htmlFor="ft">Height</label>
        <input
          placeholder={input.ft}
          onChange={handleChange}
          value={input.ft}
          required
          type="number"
          min={1}
          max={9}
          name="ft"
        />
        <button onClick={calculateImperial}>Calculate</button>
      </form>
    </div>
  );
};

export default Imperial;
