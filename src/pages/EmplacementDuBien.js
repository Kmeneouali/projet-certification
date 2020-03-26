import React from "react";
import Pagination from "../components/Pagination";
import RowInputSelect from "../components/RowInputSelect";
import AutoCompleteText from "../components/AutoCompleteText";
const EmplacementDuBien = props => {
  const {
    handlePageNext,
    handlePagePrev,
    handleChange,
    params,
    numstep,
    values,
    hanldeClickSelectSuggestions
  } = props;

  return (
    <>
      <h2>
        {params.title}
        <i className="infos"></i>
      </h2>
      <div className="padContent">
        <RowInputSelect
          label="Dans quel pays se situe votre projet ? "
          type="select"
          id="paysBien"
          value="64"
          values={values}
          handleChange={handleChange}
          stylePlus="rowGrey"
        />
        <AutoCompleteText
          label="Ville ou code postal "
          id="codePostal"
          values={values}
          handleChange={handleChange}
          hanldeClickSelectSuggestions={hanldeClickSelectSuggestions}
        />

        {/* <RowInput
          label="Ville ou code postal "
          id="codePostal"
          values={values}
          handleChange={handleChange}
        /> */}
        {/* <div>
          {data &&
            data.cities.map((d, index) => {
              return <p>{d.city}</p>;
            })}
        </div> */}
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
        params={params}
        handlePageNext={handlePageNext}
        handlePagePrev={handlePagePrev}
        numstep={numstep}
      />
    </>
  );
};

export default EmplacementDuBien;
