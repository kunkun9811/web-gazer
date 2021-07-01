import React from "react";
import "./Button2.css";

const Button2 = ({ label, BtnId, onClickHandler, selectedBtn }) => {
  const isSelected = selectedBtn === BtnId ? "btn-2-selected" : "btn-2-not-selected";

  return (
    <button onClick={() => onClickHandler(BtnId)} className={`btn-2 ${isSelected}`} id={BtnId}>
      {label}
    </button>
  );
};

export default Button2;
