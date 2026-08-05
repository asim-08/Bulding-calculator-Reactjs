import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("0");
  const handleEqual = () => {
  try {
    setDisplay(eval(display).toString());
  } catch {
    setDisplay("Error");
  }
};
  const handleOperator = (operator) => {
  setDisplay(display + operator);
};
  const handleDelete = () => {
  if (display.length === 1) {
    setDisplay("0");
  } else {
    setDisplay(display.slice(0, -1));
  }
};
  const handleClear = () => {
  setDisplay("0");
};
  const handleNumber = (value) => {
  if (display === "0") {
    setDisplay(value);
  } else {
    setDisplay(display + value);
  }
};

  return (
    <div className="calculator">

      <div className="display">
        {display}
      </div>

      <div className="row">
        <button className="clear" onClick={handleClear}>
          AC
        </button>
        <button className="delete" onClick={handleDelete}>
          DEL
        </button>
        <button className="operator" onClick={() => handleOperator("/")}>/</button>

      </div>

      <div className="row">
        <button onClick={() => handleNumber("7")}>7</button>
        <button onClick={() => handleNumber("8")}>8</button>
        <button onClick={() => handleNumber("9")}>9</button>
        <button className="operator" onClick={() => handleOperator("*")}>*</button>
      </div>

      <div className="row">
        <button onClick={() => handleNumber("4")}>4</button>
        <button onClick={() => handleNumber("5")}>5</button>
        <button onClick={() => handleNumber("6")}>6</button>
        <button className="operator" onClick={() => handleOperator("-")}>-</button>
      </div>

      <div className="row">
        <button onClick={() => handleNumber("1")}>1</button>
        <button onClick={() => handleNumber("2")}>2</button>
        <button onClick={() => handleNumber("3")}>3</button>

        <button className="operator" onClick={() => handleOperator("+")}>+</button>
      </div>

      <div className="row">
        <button onClick={() => handleNumber("0")}>0</button>
        <button onClick={() => handleNumber(".")}>.</button>
        <button className="equal" onClick={handleEqual}>
          =
        </button>
      </div>

    </div>
  );
}

export default App;