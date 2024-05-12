import React from "react";
import "./style.css";
import { useState } from "react";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const Operations = (ops) => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
      setResult("Invalid Input");
      return;
    }

    switch (ops) {
      case "+":
        setResult(number1 + number2);
        break;
      case "-":
        setResult(number1 - number2);
        break;
      case "*":
        setResult(number1 - number2);
        break;
      case "/":
        if (number1 != 0 && number2 == 0) {
          setResult(Infinity);
          break;
        } else {
          setResult(number1 / number2);
          break;
        }
      default:
        setResult("Invalid operation");
    }
  };
  return (
    <div className="calculator-container">
      <div className="input-container">
        <input
          type="text"
          value={null}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Enter Number 1"
        />
      </div>
      <div className="input-container">
        <input
          type="text"
          value={null}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Enter Number 2"
        />
      </div>
      <div className="button-container">
        <button onClick={() => Operations("+")}>+</button>
        <button onClick={() => Operations("-")}>-</button>
        <button onClick={() => Operations("*")}>*</button>
        <button onClick={() => Operations("/")}>/</button>
      </div>
      <div className="result-container">
        Result: <span>{result}</span>
      </div>
    </div>
  );
};

export default Calculator;
