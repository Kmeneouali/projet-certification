import React from "react";
import SelectionItem from "./SelectionItem";

const SelectionItems = props => {
  const { step, values, handleChange } = props;
  const selectedOption = values[step.id];

  const idStep = step.id;
  const choix = step.choix;

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
