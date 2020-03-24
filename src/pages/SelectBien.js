import React from "react";
import steps from "../configs/prams";
import SelectionItems from "../components/SelectionItems";
import Pagination from "../components/Pagination";
const SelectBien = props => {
  const { type, step } = props;

  return (
    <>
      <h2>
        {steps[step].title}
        <i className="infos"></i>
      </h2>

      <div>
        <SelectionItems steps={steps[step]} />
        <Pagination
          pagePrev={steps[step].pagePrev}
          pageNext={steps[step].pageNext}
        />
      </div>
    </>
  );
};

export default SelectBien;
