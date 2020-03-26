import React, { Component } from "react";
import params from "./../../configs/prams";

import Navigation from "./Navigation";

// import Cookies from "js-cookie";

class Content extends Component {
  // State Global de l'application
  state = {
    step: 0,
    typeDuBien: "maison",
    etatDuBien: "ancien",
    usageDuBien: "ResidencePrincipale",
    votreSituation: "Locataire",
    email: "",
    isAccepted: false,
    paysBien: "FR",
    codePostal: "",
    montantAcquisition: "",
    montantTraveau: "",
    fraisNotaire: "",
    budgetTotal: "",
    data: {}
  };

  //  Événement déclenché lorsque la valeur d'entrée est modifiée en fonction de input
  handleChange = input => e => {
    console.log("input");
    const value = input === "isAccepted" ? e.target.checked : e.target.value;
    this.setState({ [input]: value });
  };

  //  méthode pour changer le state step lorsque vous cliquez sur le bouton Suivant
  handlePageNext = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  //  méthode pour changer le state step lorsque vous cliquez sur le bouton Précédent
  handlePagePrev = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  render() {
    const {
      typeDuBien,
      etatDuBien,
      usageDuBien,
      votreSituation,
      email,
      isAccepted,
      paysBien,
      codePostal,
      montantAcquisition,
      montantTraveau,
      fraisNotaire,
      budgetTotal
    } = this.state;

    const values = {
      typeDuBien,
      etatDuBien,
      usageDuBien,
      votreSituation,
      email,
      isAccepted,
      paysBien,
      codePostal,
      montantAcquisition,
      montantTraveau,
      fraisNotaire,
      budgetTotal
    };
    const { step } = this.state;
    const _step = { step };

    return (
      //  est un composant qui contient les Routes

      <Navigation
        values={values}
        step={_step.step}
        params={params}
        handleChange={this.handleChange}
        handlePageNext={this.handlePageNext}
        handlePagePrev={this.handlePagePrev}
      />
    );
    //
  }
}

export default Content;
