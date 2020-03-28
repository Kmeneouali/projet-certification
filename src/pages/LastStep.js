import React from "react";
const LastStep = props => {
  const { params, values } = props;

  return (
    <>
      <h2>{params.title}</h2>
      <div className="padContent">
        <span>
          Votre numéro de dossier est le :{" "}
          <b className="gras">{values.idDemande}</b>
        </span>
      </div>
      <div></div>
    </>
  );
};

export default LastStep;
