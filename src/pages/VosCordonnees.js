import React from "react";
import desktop from "../resources/img/visuel-desktop-email.jpg";
import RowInput from "../components/RowInput";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Pagination from "../components/Pagination";

const VosCordonnees = props => {
  const {
    handlePageNext,
    handlePagePrev,
    handleChange,
    numstep,
    params,
    values,
    handleBlur,
    inputs
  } = props;
  const boxShadow = values["isAcceptedError"] ? "0 0 5px 0 red" : "";
  return (
    <>
      <h2>
        {params.title}
        <i className="infos"></i>
      </h2>
      <div className="padContent">
        <div className="img-step">
          <div className="txt">
            Votre email sera votre identifiant
            <span>pour accéder aux propositions</span>
          </div>
          <img src={desktop} alt="proposition" className="only-desktop" />
        </div>

        <RowInput
          label="Adresse e-mail emprunteur "
          type="inputText"
          stylePlus="rowGrey"
          id="email"
          values={values}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />

        <div className="rowInputAccept">
          {values["isAcceptedError"] ? (
            <div className="icon-error">
              <FontAwesomeIcon icon={faExclamation} />
            </div>
          ) : null}
          <input
            type="checkbox"
            id="isAccepted"
            style={{ textAlign: "right", boxShadow: boxShadow }}
            onChange={handleChange("isAccepted")}
          />
          <p>
            <label>
              J'accepte de recevoir par email des propositions de Meilleurtaux.{" "}
            </label>
          </p>
        </div>
      </div>
      <Pagination
        params={params}
        numstep={numstep}
        handlePageNext={handlePageNext}
        handlePagePrev={handlePagePrev}
        inputs={inputs}
      />
    </>
  );
};

export default VosCordonnees;
