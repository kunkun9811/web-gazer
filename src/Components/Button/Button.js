import React from "react";
import "./Button.css";

// TODO: Might need to modify how this button works
const Button = ({ label, BtnId, doneStartButtonClickHandler, selectedBtn }) => {
  const isSelected = selectedBtn === BtnId ? "selected" : "not-selected";

  return (
    <button onClick={() => doneStartButtonClickHandler(selectedBtn)} className={`custom-button ${isSelected}`} id={BtnId}>
      {label}
    </button>
  );
};

export default Button;
