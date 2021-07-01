import React from "react";
import "./Button.css";

const Button = ({ label, BtnId, onClickHandler, selectedBtn }) => {
  const isSelected = selectedBtn === BtnId ? "selected" : "not-selected";

  return (
    <button onClick={BtnId === "done" ? onClickHandler : () => onClickHandler(BtnId)} className={`custom-button ${isSelected}`} id={BtnId}>
      {label}
    </button>
  );
};

export default Button;
