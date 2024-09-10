import React from "react";

const Button = ({ item1, functionClick }) => {
  return (
    <div className="col-2">
      <button
        type="button"
        className="btn btn-danger new-button"
        onClick={() => functionClick(item1)}
      >
        Danger
      </button>
    </div>
  );
};

export default Button;
