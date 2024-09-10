import ToDoContent from "./ToDoContent";
import ToDoInput from "./ToDoInput";
import ToDoWrite1 from "./ToDoWrite1";
import "./App.css";
import Container from "./Container";
import { useState } from "react";
function App() {
  const [Work, setWork] = useState([]);
  let onButton = (onInputValue, onInputDate) => {
    let newWork = { task: onInputValue, date: onInputDate };
    setWork([...Work, newWork]);
  };

  return (
    <div className="Body">
      <Container>
        <center>
          <ToDoContent></ToDoContent>
          <div className="Text-Content">
            <ToDoInput onButton={onButton}></ToDoInput>
            <div className="Text-Content2">
              <ToDoWrite1 work={Work} setWork={setWork}></ToDoWrite1>
            </div>
          </div>
        </center>
      </Container>
    </div>
  );
}

export default App;
