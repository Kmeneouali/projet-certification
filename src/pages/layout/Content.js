import React, { Component } from "react";
import params from "./../../configs/prams";

import Navigation from "./Navigation";

// import Cookies from "js-cookie";
import Axios from "axios";
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

  getData = async id => {
    Axios.get("https://vicopo.selfbuild.fr/cherche/" + id)
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  // Montage construction componentDidMount
  componentDidMount() {
    this.getData("94800");
  }

  //Mis a jour
  componentDidUpdate() {}

  // Démontage
  componentWillUnmount() {}

  //  methode pour changer le stat de toute les inputs
  handleChange = input => e => {
    const value = input === "isAccepted" ? e.target.checked : e.target.value;
    this.setState({ [input]: value });
  };

  //  méthode pour changer la stat step lorsque vous cliquez sur le bouton Suivant
  handlePageNext = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  //  méthode pour changer la stat step lorsque vous cliquez sur le bouton Précédent
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
