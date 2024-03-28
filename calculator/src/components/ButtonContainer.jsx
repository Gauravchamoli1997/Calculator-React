import styles from "./ButtonContainer.module.css";

const ButtonContainer = ({ onButtonClick }) => {
  let Buttons = [
    "AC",
    "C",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "00",
    "0",
    ".",
    "=",
  ];
  return (
    <div className={styles.btnsContainer}>
      {Buttons.map((buttonText) => (
        <button
          key={buttonText}
          className={styles.operator}
          onClick={() => onButtonClick(buttonText)}
        >
          {buttonText}
        </button>
      ))}
    </div>
  );
};

export default ButtonContainer;
