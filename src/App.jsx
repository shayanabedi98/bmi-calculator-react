import { useState } from "react";
import "./App.css";
import Imperial from "./components/Imperial";
import Metric from "./components/Metric";

function App() {
  const [active, setActive] = useState({
    metric: true,
    imperial: false,
  });

  const [input, setInput] = useState({
    kg: "Kilograms",
    cm: "Centimeters",
    lbs: "Pounds",
    inch: "Inches",
    ft: "Feet",
  });

  const [bmi, setBmi] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevValue) => {
      if (value === "0") {
        return { ...prevValue, [name]: "0" };
      } else {
        return { ...prevValue, [name]: parseFloat(value) || "" };
      }
    });
  };

  const handleActive = (clicked) => {
    setActive({
      metric: clicked == "metric",
      imperial: clicked == "imperial",
    });
  };

  const calculateImperial = () => {
    const newInch = input.ft * 12 + parseFloat(input.inch);
    const calc = Math.round((input.lbs / Math.pow(newInch, 2)) * 703);
    setBmi(calc);
  };

  const calculateMetric = () => {
    const calc = Math.round(input.kg / Math.pow(input.cm / 100, 2));
    setBmi(calc);
  };

  return (
    <>
      <button onClick={() => handleActive("metric")}>Metric</button>
      <button onClick={() => handleActive("imperial")}>Imperial</button>

      {active.metric && (
        <Metric
          handleChange={handleChange}
          input={input}
          calculateMetric={calculateMetric}
        />
      )}
      {active.imperial && (
        <Imperial
          handleChange={handleChange}
          input={input}
          calculateImperial={calculateImperial}
        />
      )}
      {bmi > 0 && (
        <div>
          <h1>Your BMI is {bmi}</h1>
        </div>
      )}
    </>
  );
}

export default App;
