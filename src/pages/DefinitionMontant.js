import React from "react";
import Pagination from "../components/Pagination";
import RowInput from "../components/RowInput";

const DefinitionMontant = props => {
  const {
    handlePageNext,
    handlePagePrev,
    handleChange,
    numstep,
    params,
    values
  } = props;

  return (
    <>
      <h2>
        {params.title}
        <i className="infos"></i>
      </h2>
      <div className="padContent">
        <RowInput
          label="Montant estimé de votre acquisition  "
          type="inputText"
          stylePlus="rowGrey"
          id="montantAcquisition"
          values={values}
          handleChange={handleChange}
        />
        {/* <span>€</span> */}
        <RowInput
          label="Montant estimé des travaux "
          type="inputText"
          id="montantTraveau"
          values={values}
          handleChange={handleChange}
        />
        <RowInput
          label="Frais de notaire "
          type="inputText"
          id="fraisNotaire"
          values={values}
          stylePlus="rowGrey"
          handleChange={handleChange}
        />
        <RowInput
          label="Budget total estimé du projet "
          type="inputText"
          id="budgetTotal"
          values={values}
          handleChange={handleChange}
        />
      </div>
      <Pagination
        params={params}
        numstep={numstep}
        handlePageNext={handlePageNext}
        handlePagePrev={handlePagePrev}
      />
    </>
  );
};

export default DefinitionMontant;
