import React from "react";
import { motion } from "framer-motion";

const Metric = ({ handleChange, input, calculateMetric }) => {
  return (
    <motion.div
      className="input-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ opacity: { duration: 0.2, delay: 0.3 } }}
    >
      <motion.form onSubmit={(e) => e.preventDefault()} action="">
        <label htmlFor="kg">Weight in Kilograms</label>
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
        <label htmlFor="cm">Height in Centimeters</label>
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
      </motion.form>
    </motion.div>
  );
};

export default Metric;
