import React from "react";
import Pagination from "../components/Pagination";
import RowInput from "../components/RowInput";

const DefinitionMontant = props => {
  const { handlePageNext, handlePagePrev, handleChange, step, values } = props;

  return (
    <>
      <h2>
        {step.title}
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
        step={step}
        handlePageNext={handlePageNext}
        handlePagePrev={handlePagePrev}
      />
    </>
  );
};

export default DefinitionMontant;
