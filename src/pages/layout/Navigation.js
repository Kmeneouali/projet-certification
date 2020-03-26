import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EmplacementDuBien from "../EmplacementDuBien";
import DefinitionMontant from "../DefinitionMontant";
import VosCordonnees from "../VosCordonnees";
import LastStep from "../LastStep";
import SelectBien from "../SelectBien";
const Navigation = props => {
  const {
    values,
    handleChange,
    step,
    handlePageNext,
    handlePagePrev,
    params
  } = props;
  const _params = Object.keys(params);
  let _step = "step".concat(step);
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <SelectBien
              values={values}
              step={params[_step]}
              handleChange={handleChange}
              handlePageNext={handlePageNext}
              handlePagePrev={handlePagePrev}
            />
          </Route>
          {_params.map((param, index) => {
            const page = "/" + params[param].id;
            const _step = "step".concat(step);

            if (param === "step4") {
              return (
                <Route path={page} key={index}>
                  <EmplacementDuBien
                    key={index}
                    values={values}
                    step={params[_step]}
                    handleChange={handleChange}
                    handlePageNext={handlePageNext}
                    handlePagePrev={handlePagePrev}
                  />
                </Route>
              );
            }
            if (param === "step5") {
              return (
                <Route path={page} key={index}>
                  <DefinitionMontant
                    key={index}
                    values={values}
                    step={params[_step]}
                    handleChange={handleChange}
                    handlePageNext={handlePageNext}
                    handlePagePrev={handlePagePrev}
                  />
                </Route>
              );
            }
            if (param === "step6") {
              return (
                <Route path={page} key={index}>
                  <VosCordonnees
                    key={index}
                    step={params[_step]}
                    handleChange={handleChange}
                    handlePageNext={handlePageNext}
                    handlePagePrev={handlePagePrev}
                    values={values}
                  />
                </Route>
              );
            }
            if (param === "step7") {
              return (
                <Route path={page} key={index}>
                  <LastStep
                    key={index}
                    step={params[_step]}
                    handleChange={handleChange}
                  />
                </Route>
              );
            } else {
              return (
                <Route path={page} key={index}>
                  <SelectBien
                    values={values}
                    step={params[_step]}
                    handleChange={handleChange}
                    handlePageNext={handlePageNext}
                    handlePagePrev={handlePagePrev}
                  />
                </Route>
              );
            }
          })}
          {/* <Route path="/TypeDeBien/">
            <SelectBien
              values={values}
              step={0}
              handleChange={handleChange}
              handlePageNext={handlePageNext}
              handlePagePrev={handlePagePrev}
            />
          </Route>
          <Route path="/EtatDuBien">
            <SelectBien
              values={values}
              step={1}
              handleChange={handleChange}
              handlePageNext={handlePageNext}
              handlePagePrev={handlePagePrev}
            />
          </Route>
          <Route path="/UsageDuBien">
            <SelectBien
              values={values}
              step={2}
              handleChange={handleChange}
              handlePageNext={handlePageNext}
              handlePagePrev={handlePagePrev}
            />
          </Route>
          <Route path="/VotreSituation">
            <SelectBien
              values={values}
              step={3}
              handleChange={handleChange}
              handlePageNext={handlePageNext}
              handlePagePrev={handlePagePrev}
            />
          </Route>
          <Route path="/EmplacementDuBien">
            <EmplacementDuBien
              values={values}
              step={4}
              handleChange={handleChange}
              handlePageNext={handlePageNext}
              handlePagePrev={handlePagePrev}
            />
          </Route>
          <Route path="/DefinitionMontant">
            <DefinitionMontant
              values={values}
              step={5}
              handleChange={handleChange}
              handlePageNext={handlePageNext}
              handlePagePrev={handlePagePrev}
            />
          </Route>
          <Route path="/VosCordonnees">
            <VosCordonnees
              step={6}
              handleChange={handleChange}
              handlePageNext={handlePageNext}
              handlePagePrev={handlePagePrev}
              values={values}
            />
          </Route>
          <Route path="/LastStep">
            <LastStep step={7} handleChange={handleChange} />
          </Route> */}
        </Switch>
      </Router>
    </>
  );
};

export default Navigation;
