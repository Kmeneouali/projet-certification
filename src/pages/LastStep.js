import React from "react";

import Pagination from "../components/Pagination";
const LastStep = props => {
  const { handlePageNext, handlePagePrev, numstep, params } = props;

  return (
    <>
      <h2>{params.title}</h2>
      <div className="padContent">
        <span>
          Votre numéro de dossier est le : <b className="gras">21087694</b>
        </span>
      </div>
      <div>
        <Pagination
          params={params}
          numstep={numstep}
          handlePageNext={handlePageNext}
          handlePagePrev={handlePagePrev}
        />
      </div>
    </>
  );
};

export default LastStep;
