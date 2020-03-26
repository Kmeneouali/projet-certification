import React from "react";

const SelectionItem = props => {
  const { checked, id, idStep, title, handleChange } = props;
  const selected = checked ? "selected" : "";

  return (
    <div className={`selectionItem ${selected} `}>
      <input
        type="radio"
        id={id}
        value={id}
        checked={checked}
        onChange={handleChange(idStep)}
      />
      <label>{title}</label>
    </div>
  );
};

export default SelectionItem;
