import React from "react";
import { motion } from "framer-motion";

const Imperial = ({ handleChange, input, calculateImperial }) => {
  return (
    <motion.div
      className="input-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ opacity: { duration: 0.2, delay: 0.3 } }}
    >
      <motion.form onSubmit={(e) => e.preventDefault()} action="">
        <label htmlFor="lbs">Weight in Pounds</label>
        <input
          placeholder={input.lbs}
          onChange={handleChange}
          value={input.lbs}
          required
          type="number"
          step={0.01}
          min={1}
          max={700}
          name="lbs"
        />
        <label htmlFor="ft">Height in Feet</label>
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
        <label htmlFor="inch">Height in Inches</label>
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
        <button onClick={calculateImperial}>Calculate</button>
      </motion.form>
    </motion.div>
  );
};

export default Imperial;
