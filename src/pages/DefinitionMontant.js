import React, { Component } from "react";
import Pagination from "../components/Pagination";
import RowInput from "../components/RowInput";
import steps from "../configs/prams";
class DefinitionMontant extends Component {
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
            label="Montant estimé de votre acquisition  "
            type="inputText"
            stylePlus="rowGrey"
          />
          {/* <span>€</span> */}
          <RowInput label="Montant estimé des travaux " type="inputText" />
          <RowInput
            label="Frais de notaire "
            type="inputText"
            stylePlus="rowGrey"
          />
          <RowInput label="Budget total estimé du projet " type="inputText" />
        </div>
        <Pagination
          pagePrev={steps[step].pagePrev}
          pageNext={steps[step].pageNext}
        />
      </>
    );
  }
}

export default DefinitionMontant;
