import React from "react";
import desktop from "../resources/img/visuel-desktop-email.jpg";
import RowInput from "../components/RowInput";

import Pagination from "../components/Pagination";

const VosCordonnees = props => {
  const { handlePageNext, handlePagePrev, handleChange, step } = props;
  return (
    <>
      <h2>
        {step.title}
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
          handleChange={handleChange}
        />

        <div className="rowInputAccept">
          <input
            type="checkbox"
            id="isAccepted"
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
        step={step}
        handlePageNext={handlePageNext}
        handlePagePrev={handlePagePrev}
      />
    </>
  );
};

export default VosCordonnees;
