import React, { Component } from "react";
import params from "./../../configs/prams";
import Axios from "axios";
import Navigation from "./Navigation";
import Cookies from "js-cookie";

class Content extends Component {
  constructor(props) {
    super(props);
    // state Global
    this.state = {
      step: 0,
      typeDuBien: "maison",
      etatDuBien: "ancien",
      usageDuBien: "ResidencePrincipale",
      votreSituation: "Locataire",

      paysBien: "FR",
      email: "",
      isAccepted: false,
      codePostal: "",
      montantTraveau: "",
      fraisNotaire: "",
      budgetTotal: 0,
      montantAcquisition: "",
      idDemande: "",
      emailError: "",
      isAcceptedError: "",
      codePostalError: "",
      montantTraveauError: "",
      fraisNotaireError: "",
      budgetTotalError: "",
      montantAcquisitionError: "",

      suggestions: []
    };
    // persisté le state global dans les cookies
    if (Cookies.get("step") === undefined || Cookies.get("step") === "7") {
      Cookies.set("step", this.state.step);
    }
  }

  // methode pour obtenir la ville en donnant le code postal ou le nom de la ville
  getDataCity = async param => {
    Axios.get("https://vicopo.selfbuild.fr/cherche/" + param)
      .then(response => {
        this.setState({ suggestions: response.data.cities });
      })
      .catch(error => {
        console.log(error);
      });
  };

  //  Événement déclenché lorsque la valeur d'entrée est modifiée en fonction de l'id d'input
  handleChange = input => e => {
    const value = input === "isAccepted" ? e.target.checked : e.target.value;
    let suggestions = [];

    switch (input) {
      case "codePostal":
        this.getDataCity(value);
        if (value.length > 0) {
          const regex = new RegExp(`^${value}`, "i");
          suggestions = this.state.suggestions
            .sort()
            .filter(v => regex.test(v.city));
        }
        this.setState({ [input]: value, suggestions: suggestions });
        break;
      case "montantTraveau":
      case "fraisNotaire":
      case "budgetTotal":
      case "montantAcquisition": {
        const regexNum = /^[0-9\b]+$/;
        if (value === "" || regexNum.test(value)) {
          this.setState({ [input]: value, suggestions: suggestions });
        }
        break;
      }
      // case "email":
      //   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      //   if (value === "" || re.test(String(value).toLowerCase())) {
      //     this.setState({ [input]: value, suggestions: suggestions });
      //   }
      default:
        this.setState({ [input]: value, suggestions: suggestions });
        break;
    }
  };

  handleBlur = () => {
    let taux = this.state.etatDuBien === "ancien" ? 7.38 : 1.8;

    const montantAcquisition = Number(this.state.montantAcquisition);
    const montantTraveau = Number(this.state.montantTraveau);
    const _fraisNotaire = (Number(this.state.montantAcquisition) * taux) / 100;

    const _BudgetTotal = montantAcquisition + montantTraveau + _fraisNotaire;

    this.setState({ budgetTotal: _BudgetTotal, fraisNotaire: _fraisNotaire });
  };
  hanldeClickSelectSuggestions = value => {
    this.setState({ codePostal: value, suggestions: [] });
  };

  //  méthode pour changer le state step lorsque vous cliquez sur le bouton Suivant
  handlePageNext = (numstep, _inputs) => {
    let conteur = 0;
    // const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    //   if (value === "" || re.test(String(value).toLowerCase())) {
    //     this.setState({ [input]: value, suggestions: suggestions });
    if (_inputs) {
      _inputs.map(input => {
        if (this.state[input] === "") {
          this.setState({ [input.concat("Error")]: "ce champ est requis" });
          conteur = conteur + 1;
        }
        // if (
        //   input === "email" &&
        //   re.test(String(this.state[input]).toLowerCase()) === true
        // ) {
        //   this.setState({ [input.concat("Error")]: "ce champ est requis" });
        //   conteur = conteur + 1;
        // }

        if (!this.state[input]) {
          this.setState({
            [input.concat("Error")]: "vous devez accepter les conditions !"
          });
          conteur = conteur + 1;
        }
      });
    }
    if (conteur === 0) {
      numstep = Number(numstep) + 1;
      if (numstep === 7) {
        this.handleSubmit();
      }
    }
    Cookies.set("step", numstep);
    this.setState({ step: numstep });

    return numstep;
  };

  handleSubmit = () => {
    this.setState({ idDemande: "21087694" });
  };
  //  méthode pour changer le state step lorsque vous cliquez sur le bouton Précédent
  handlePagePrev = _inputs => {
    const { step } = this.state;
    if (_inputs) {
      _inputs.map(input => {
        if (this.state[input] !== "") {
          this.setState({ [input.concat("Error")]: "" });
        }
      });
    }
    Cookies.set("step", Number(step - 1));
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
      idDemande,
      montantTraveau,
      fraisNotaire,
      budgetTotal,

      emailError,
      isAcceptedError,
      codePostalError,
      montantTraveauError,
      fraisNotaireError,
      budgetTotalError,
      montantAcquisitionError,
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
      idDemande,
      montantTraveau,
      fraisNotaire,
      budgetTotal,
      suggestions,
      emailError,
      isAcceptedError,
      codePostalError,
      montantTraveauError,
      fraisNotaireError,
      budgetTotalError,
      montantAcquisitionError
    };

    const _step = Cookies.get("step");

    return (
      //  est un composant qui contient les Routes

      <Navigation
        values={values}
        step={_step}
        params={params}
        handleChange={this.handleChange}
        handlePageNext={this.handlePageNext}
        handlePagePrev={this.handlePagePrev}
        hanldeClickSelectSuggestions={this.hanldeClickSelectSuggestions}
        handleBlur={this.handleBlur}
      />
    );
    //
  }
}

export default Content;
