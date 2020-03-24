import React, { Component } from "react";
import Pagination from "../components/Pagination";
import RowInput from "../components/RowInput";
import steps from "../configs/prams";
class EmplacementDuBien extends Component {
  render() {
    const step = this.props.step;
    return (
      <>
        <h2>
          {steps[step].title}
          <i className="infos"></i>
        </h2>
        <div className="padContent">
          <RowInput
            label="Dans quel pays se situe votre projet ? "
            type="select"
            id="pays_bien"
            stylePlus="rowGrey"
          />
          <RowInput
            label="Ville ou code postal "
            id="codePostal"
            type="inputText"
          />
          <div className="conseilTxt">
            <p>
              La connaissance du code postal du bien permettra de calculer les
              frais de notaire selon les conditions en vigueur dans le
              département concerné.
            </p>
            <p>
              Si vous êtes en recherche de bien sur plusieurs communes, indiquez
              une commune ciblée.
            </p>
          </div>
        </div>
        <Pagination
          pagePrev={steps[step].pagePrev}
          pageNext={steps[step].pageNext}
        />
      </>
    );
  }
}

export default EmplacementDuBien;
