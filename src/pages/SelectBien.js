import React from "react";
import SelectionItems from "../components/SelectionItems";
import Pagination from "../components/Pagination";
const SelectBien = props => {
  const {
    values,
    handleChange,
    handlePageNext,
    handlePagePrev,
    params,
    numstep,
    inputs
  } = props;

  return (
    <>
      <h2>
        {params.title}
        <i className="infos"></i>
      </h2>

      <div>
        <SelectionItems
          values={values}
          handleChange={handleChange}
          params={params}
        />
        <Pagination
          handlePageNext={handlePageNext}
          handlePagePrev={handlePagePrev}
          params={params}
          numstep={numstep}
          inputs={inputs}
        />
      </div>
    </>
  );
};

export default SelectBien;
