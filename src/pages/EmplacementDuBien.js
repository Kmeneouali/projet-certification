import React from "react";

import Pagination from "../components/Pagination";
import RowInput from "../components/RowInput";
import RowInputSelect from "../components/RowInputSelect";
const EmplacementDuBien = props => {
  const { handlePageNext, handlePagePrev, handleChange, step, values } = props;

  return (
    <>
      <h2>
        {step.title}
        <i className="infos"></i>
      </h2>
      <div className="padContent">
        {/* <RowInput
          label="Dans quel pays se situe votre projet ? "
          type="select"
          countries={countries}
          id="paysBien"
          value="64"
          values={values}
          handleChange={handleChange}
          stylePlus="rowGrey"
          value
        /> */}
        <RowInputSelect
          label="Dans quel pays se situe votre projet ? "
          type="select"
          id="paysBien"
          value="64"
          values={values}
          handleChange={handleChange}
          stylePlus="rowGrey"
        />
        <RowInput
          label="Ville ou code postal "
          id="codePostal"
          values={values}
          handleChange={handleChange}
        />
        <div className="conseilTxt">
          <p>
            La connaissance du code postal du bien permettra de calculer les
            frais de notaire selon les conditions en vigueur dans le département
            concerné.
          </p>
          <p>
            Si vous êtes en recherche de bien sur plusieurs communes, indiquez
            une commune ciblée.
          </p>
        </div>
      </div>
      <Pagination
        step={step}
        handlePageNext={handlePageNext}
        handlePagePrev={handlePagePrev}
      />
    </>
  );
};

export default EmplacementDuBien;
