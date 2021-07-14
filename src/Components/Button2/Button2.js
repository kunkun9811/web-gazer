import React from "react";
import "./Button2.css";

const Button2 = ({ label, BtnId, onClickHandler, selectedBtn }) => {
  // the "4" & "3" condition is for easy reading and hard reading
  const isSelected = selectedBtn === BtnId ? "btn-2-selected" : selectedBtn === "4" && BtnId === "3" ? "btn-2-selected" : "btn-2-not-selected";

  return (
    <button onClick={() => onClickHandler(BtnId)} className={`btn-2 ${isSelected}`} id={BtnId}>
      {label}
    </button>
  );
};

export default Button2;
