import React, { Component } from "react";
import params from "./../../configs/prams";
import Axios from "axios";
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
    suggestions: []
  };
  getData = async codePostal => {
    Axios.get("https://vicopo.selfbuild.fr/cherche/" + codePostal)
      .then(response => {
        console.log(response.data.cities);
        this.setState({ suggestions: response.data.cities });
      })
      .catch(error => {
        console.log(error);
      });
  };
  //  Événement déclenché lorsque la valeur d'entrée est modifiée en fonction de input
  handleChange = input => e => {
    const value = input === "isAccepted" ? e.target.checked : e.target.value;
    let suggestions = [];
    if (input === "codePostal") {
      this.getData(value);

      if (value.length > 0) {
        const regex = new RegExp(`^${value}`, "i");
        suggestions = this.state.suggestions
          .sort()
          .filter(v => regex.test(v.city));
      }
    }
    this.setState({ [input]: value, suggestions: suggestions });
  };
  hanldeClickSelectSuggestions = value => {
    this.setState({ codePostal: value, suggestions: [] });
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
      budgetTotal,
      suggestions
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
      budgetTotal,
      suggestions
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
        hanldeClickSelectSuggestions={this.hanldeClickSelectSuggestions}
      />
    );
    //
  }
}

export default Content;
