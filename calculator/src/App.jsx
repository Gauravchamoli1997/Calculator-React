import "./App.css";
import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState([""]);
  const onButtonClick = (buttonText) => {
    if (buttonText === "C" || buttonText === "AC") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayVal = calVal + buttonText;
      setCalVal(newDisplayVal);
    }
  };

  return (
    <div className="body">
      <div className={styles.container}>
        <Display displayVal={calVal} />
        <ButtonContainer onButtonClick={onButtonClick} />
      </div>
    </div>
  );
}

export default App;
