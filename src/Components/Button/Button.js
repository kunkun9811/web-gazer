import React from "react";
import "./Button.css";

const Button = ({ label, BtnId, onClickHandler, selectedBtn }) => {
  return (
    <button onClick={() => onClickHandler(BtnId)} className={selectedBtn === BtnId ? "selected" : "not-selected button-btn"} id={BtnId}>
      {label}
    </button>
  );
};

export default Button;
