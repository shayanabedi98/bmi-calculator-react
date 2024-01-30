import { useState } from "react";
import Imperial from "./Imperial";
import Metric from "./Metric";
import Systems from "./Systems";
import Results from "./Results";

function Container() {
  const [active, setActive] = useState({
    metric: true,
    imperial: false,
  });

  const [input, setInput] = useState({
    kg: "kg",
    cm: "cm",
    lbs: "lbs",
    inch: "in",
    ft: "ft",
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
    setBmi(0)
  };

  const handleActive = (clicked) => {
    setActive({
      metric: clicked == "metric",
      imperial: clicked == "imperial",
    });

    setBmi(0)
  };

  const calculateImperial = () => {
    const { ft, inch, lbs } = input;
    if (ft <= 9 && ft > 0 && inch <= 11 && inch >= 0 && lbs <= 700 && lbs > 0) {
      const newInch = input.ft * 12 + parseFloat(input.inch);
      const calc = Math.round((input.lbs / Math.pow(newInch, 2)) * 703);
      setBmi(calc);
    }
  };

  const calculateMetric = () => {
    const { kg, cm } = input;
    if (kg <= 500 && kg > 0 && cm <= 300 && cm > 0) {
      const calc = Math.round(kg / Math.pow(cm / 100, 2));
      setBmi(calc);
    }
  };

  return (
    <>
      <div className="grid-container">
        <Systems active={active} handleActive={handleActive} />
        {active.metric && (
          <Metric
            key="metric"
            handleChange={handleChange}
            input={input}
            calculateMetric={calculateMetric}
          />
        )}
        {active.imperial && (
          <Imperial
            key="imperial"
            handleChange={handleChange}
            input={input}
            calculateImperial={calculateImperial}
          />
        )}

        {bmi > 0 && (
          <Results bmi={bmi}/>
        )}
      </div>
    </>
  );
}

export default Container;
