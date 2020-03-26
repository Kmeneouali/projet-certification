import React from "react";
import SelectionItem from "./SelectionItem";

const SelectionItems = props => {
  const { params, values, handleChange } = props;
  const selectedOption = values[params.id];

  const idStep = params.id;
  const choix = params.choix;

  return (
    <div className="selectionItems">
      {choix.map((selection, index) => {
        return (
          <SelectionItem
            idStep={idStep}
            key={index}
            id={selection.id}
            title={selection.title}
            checked={selectedOption === selection.id}
            handleChange={handleChange}
          />
        );
      })}
    </div>
  );
};

export default SelectionItems;
