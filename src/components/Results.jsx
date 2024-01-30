import React from "react";
import { motion } from "framer-motion";

const Results = ({ bmi }) => {
  const resultStyle = (result) => {
    if (result > 0 && result <= 18) {
      return "rgb(255, 52, 255)";
    } else if (result >= 19 && result <= 24) {
      return "rgb(0, 161, 0)";
    } else if (result >= 25 && result <= 29) {
      return "rgb(255, 177, 32)";
    } else if (result > 29) {
      return "rgb(247, 75, 75)";
    }
  };

  const resultSentence = (result) => {
    if (result > 0 && result <= 18) {
      return "underweight";
    } else if (result >= 19 && result <= 24) {
      return "at a healthy weight";
    } else if (result >= 25 && result <= 29) {
      return "overweight";
    } else if (result > 29) {
      return "obese";
    }
  };

  return (
    <div className="results">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="result-sentence"
      >
        <h2>
          Your BMI is <span style={{ color: resultStyle(bmi) }}>{bmi}</span>
        </h2>
        <h3>You are considered to be {resultSentence(bmi)}.</h3>
      </motion.div>
      <motion.div
        className="results-chart"
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        transition={{
          opacity: { delay: 1, ease: "easeInOut" },
          height: { delay: 0.5, ease: "easeInOut", duration: 0.4 },
        }}
      >
        <div>
          <div className="under">
            <span>01 - 18</span>
            <p>Underweight</p>
          </div>
          <div className="healthy">
            <span>19 - 24</span>
            <p>Healthy Weight</p>
          </div>
          <div className="over">
            <span>25 - 29</span>
            <p>Overweight</p>
          </div>
          <div className="obese">
            <span>30 + </span>
            <p>Obese</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Results;
