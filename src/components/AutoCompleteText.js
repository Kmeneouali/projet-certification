import React from "react";
// get our fontawesome imports
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const AutoCompleteText = props => {
  const {
    values,
    id,
    label,
    hanldeClickSelectSuggestions,
    handleChange
  } = props;

  const boxShadow = values.codePostalError ? "0 0 5px 0 red" : "";
  const renderSuggestions = () => {
    if (values.suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {values.suggestions.map((item, index) => {
          return (
            <li
              onClick={() =>
                hanldeClickSelectSuggestions("(" + item.code + ") " + item.city)
              }
              key={index}
            >
              ({item.code}) {item.city}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="rowInput Gtay">
      <label>
        {label} <i>*</i>
        <i className="infos"></i>
      </label>
      <div className="select">
        <input
          type="text"
          id={id}
          value={values[id]}
          onChange={handleChange(id)}
          style={{ boxShadow: boxShadow }}
        />

        {renderSuggestions()}
      </div>
      <div style={{ paddingLeft: "20px" }}></div>
      {values.codePostalError ? (
        <div className="icon-error">
          <FontAwesomeIcon icon={faExclamation} />
        </div>
      ) : null}
    </div>
  );
};

export default AutoCompleteText;
