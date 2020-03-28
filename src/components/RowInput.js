import React from "react";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const RowInput = props => {
  const {
    label,
    stylePlus,
    id,
    handleChange,
    values,
    placeholder,
    readOnly,
    handleBlur
  } = props;
  const boxShadow = values[id + "Error"] ? "0 0 5px 0 red" : "";
  const _handleBlur = () => {
    handleBlur();
  };

  return (
    <div className={`rowInput ${stylePlus} `}>
      <label>
        {label} <i>*</i>
        <i className="infos"></i>
      </label>
      <div className="select">
        <input
          value={values[id]}
          id={id}
          name={id}
          onChange={handleChange(id)}
          placeholder={placeholder}
          readOnly={readOnly}
          onBlur={_handleBlur}
          style={{ textAlign: "right", boxShadow: boxShadow }}
        />
      </div>

      {id !== "email" ? (
        <div style={{ paddingLeft: "5px", fontSize: "20px" }}>€</div>
      ) : null}
      {values[id + "Error"] ? (
        <div className="icon-error">
          <FontAwesomeIcon icon={faExclamation} />
        </div>
      ) : null}
    </div>
  );
};

export default RowInput;
