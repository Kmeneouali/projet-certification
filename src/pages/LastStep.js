import React from "react";

import Pagination from "../components/Pagination";
const LastStep = props => {
  const { handlePageNext, handlePagePrev, step } = props;

  return (
    <>
      <h2>{step.title}</h2>
      <div className="padContent">
        <span>
          Votre numéro de dossier est le : <b className="gras">21087694</b>
        </span>
      </div>
      <div>
        <Pagination
          step={step}
          handlePageNext={handlePageNext}
          handlePagePrev={handlePagePrev}
        />
      </div>
    </>
  );
};

export default LastStep;
