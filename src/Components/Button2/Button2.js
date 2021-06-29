import React from "react";

const Button2 = ({ label, BtnId, onClickHandler, selectedBtn }) => {
  const isSelected = selectedBtn === BtnId ? "selected" : "not-selected";

  return (
    <button onClick={() => onClickHandler(BtnId)} className={`custom-button ${isSelected}`} id={BtnId}>
      {label}
    </button>
  );
};

export default Button2;
