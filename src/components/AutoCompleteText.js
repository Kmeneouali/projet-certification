import React from "react";

const AutoCompleteText = props => {
  const {
    values,
    id,
    label,
    hanldeClickSelectSuggestions,
    handleChange
  } = props;
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
        />
        {renderSuggestions()}
      </div>
    </div>
  );
};

export default AutoCompleteText;
