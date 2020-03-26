import React from "react";
import SelectionItems from "../components/SelectionItems";
import Pagination from "../components/Pagination";
const SelectBien = props => {
  const { values, handleChange, handlePageNext, handlePagePrev, step } = props;

  return (
    <>
      <h2>
        {step.title}
        <i className="infos"></i>
      </h2>

      <div>
        <SelectionItems
          values={values}
          handleChange={handleChange}
          step={step}
        />
        <Pagination
          handlePageNext={handlePageNext}
          handlePagePrev={handlePagePrev}
          step={step}
        />
      </div>
    </>
  );
};

export default SelectBien;
