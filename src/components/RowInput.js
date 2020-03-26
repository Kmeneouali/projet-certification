import React from "react";

const RowInput = props => {
  const { label, stylePlus, id, handleChange, values } = props;

  return (
    <div className={`rowInput ${stylePlus} `}>
      <label>
        {label} <i>*</i>
        <i className="infos"></i>
      </label>
      <div className="select">
        <input
          type="text"
          value={values[id]}
          id={id}
          name={id}
          onChange={handleChange(id)}
        />
      </div>
    </div>
  );
};

export default RowInput;
