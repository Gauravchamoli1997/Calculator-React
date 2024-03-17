import "./App.css";
import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";

function App() {
  return (
    <div className="body">
      <div className={styles.container}>
        <Display />
        <ButtonContainer />
      </div>
    </div>
  );
}

export default App;
