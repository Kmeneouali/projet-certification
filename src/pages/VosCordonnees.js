import React, { Component } from "react";
import desktop from "../resources/img/visuel-desktop-email.jpg";
import RowInput from "../components/RowInput";

import steps from "../configs/prams";
import Pagination from "../components/Pagination";

class VosCordonnees extends Component {
  render() {
    const step = this.props.step;
    return (
      <>
        <h2>
          {steps[step].title}
          <i className="infos"></i>
        </h2>
        <div class="padContent">
          <div class="img-step">
            <div class="txt">
              Votre email sera votre identifiant
              <span>pour accéder aux propositions</span>
            </div>
            <img src={desktop} alt="proposition" class="only-desktop" />
          </div>

          <RowInput
            label="Adresse e-mail emprunteur "
            type="inputText"
            stylePlus="rowGrey"
          />

          <div class="rowInputAccept">
            <input
              type="checkbox"
              value="1"
              id="optin_propcomm"
              name="optin_propcomm"
              autocomplete="off"
            />
            <p>
              <label>
                J'accepte de recevoir par email des propositions de
                Meilleurtaux.{" "}
              </label>
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

export default VosCordonnees;
