import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import EmplacementDuBien from "../EmplacementDuBien";
import DefinitionMontant from "../DefinitionMontant";
import VosCordonnees from "../VosCordonnees";
import LastStep from "../LastStep";
import SelectBien from "../SelectBien";
const Navigation = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            {/* <ChoixDuBien step="step0" /> */}
            <SelectBien step="step0" />
          </Route>
          <Route path="/TypeDeBien">
            <SelectBien step="step0" />
          </Route>
          <Route path="/EtatDuBien">
            <SelectBien step="step1" />
          </Route>
          <Route path="/UsageDuBien">
            <SelectBien step="step2" />
          </Route>
          <Route path="/VotreSituation">
            <SelectBien step="step3" />
          </Route>
          <Route path="/EmplacementDuBien">
            <EmplacementDuBien step="step4" />
          </Route>
          <Route path="/DefinitionMontant">
            <DefinitionMontant step="step5" />
          </Route>
          <Route path="/VosCordonnees">
            <VosCordonnees step="step6" />
          </Route>
          <Route path="/LastStep">
            <LastStep step="step7" />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Navigation;
