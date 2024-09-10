import { useState } from "react";

function ToDoInput({ onButton }) {
  const [InputValue, setInputValue] = useState("");
  const [InputDate, setInputDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onButton(InputValue, InputDate);
    setInputValue("");
    setInputDate("");
  };

  return (
    <form className="row new-row" onSubmit={handleSubmit}>
      <div className="col-4">
        <input
          type="text"
          placeholder="Enter Todo Here"
          value={InputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
      </div>
      <div className="col-4">
        <input
          type="date"
          value={InputDate}
          onChange={(event) => setInputDate(event.target.value)}
        />
      </div>
      <div className="col-2">
        <button type="submit" className="btn btn-success new-button">
          Success
        </button>
      </div>
    </form>
  );
}

export default ToDoInput;
