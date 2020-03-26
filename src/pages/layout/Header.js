import React, { Component } from "react";
import Logo from "../../resources/img/logo.svg";
class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="content-wrapper">
          <div className="top-logo">
            <div className="left-logo">
              <img src={Logo} alt="meilleurtaux" />

              <div className="baseline">
                Crédit immobilier : 5 mn pour obtenir le meilleur taux
              </div>
            </div>

            <div className="right-logo"></div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
