import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import EmplacementDuBien from "../EmplacementDuBien";
import DefinitionMontant from "../DefinitionMontant";
import VosCordonnees from "../VosCordonnees";
import LastStep from "../LastStep";
import SelectBien from "../SelectBien";
const Navigation = props => {
  const {
    params,
    values,
    step,
    handleChange,
    handlePageNext,
    handlePagePrev,
    hanldeClickSelectSuggestions,
    handleBlur
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
              numstep={step}
              params={params[_step]}
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
                    numstep={step}
                    params={params[_step]}
                    handleChange={handleChange}
                    handlePageNext={handlePageNext}
                    handlePagePrev={handlePagePrev}
                    hanldeClickSelectSuggestions={hanldeClickSelectSuggestions}
                    inputs={["codePostal"]}
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
                    numstep={step}
                    params={params[_step]}
                    handleChange={handleChange}
                    handlePageNext={handlePageNext}
                    handlePagePrev={handlePagePrev}
                    handleBlur={handleBlur}
                    inputs={["montantAcquisition"]}
                  />
                </Route>
              );
            }
            if (param === "step6") {
              return (
                <Route path={page} key={index}>
                  <VosCordonnees
                    key={index}
                    numstep={step}
                    params={params[_step]}
                    handleChange={handleChange}
                    handlePageNext={handlePageNext}
                    handlePagePrev={handlePagePrev}
                    handleBlur={handleBlur}
                    values={values}
                    inputs={["isAccepted", "email"]}
                  />
                </Route>
              );
            }
            if (param === "step7") {
              return (
                <Route path={page} key={index}>
                  <LastStep
                    key={index}
                    numstep={step}
                    params={params[_step]}
                    handleChange={handleChange}
                    handlePageNext={handlePageNext}
                    handlePagePrev={handlePagePrev}
                    values={values}
                  />
                </Route>
              );
            } else {
              return (
                <Route path={page} key={index}>
                  <SelectBien
                    values={values}
                    numstep={step}
                    params={params[_step]}
                    handleChange={handleChange}
                    handlePageNext={handlePageNext}
                    handlePagePrev={handlePagePrev}
                  />
                </Route>
              );
            }
          })}
        </Switch>
        {/* {_step !== 7 ? (
          <Pagination
            handlePageNext={handlePageNext}
            handlePagePrev={handlePagePrev}
            params={params[_step]}
            numstep={step}
            inputs={["toto"]}
          />
        ) : null} */}
      </Router>
    </>
  );
};

export default Navigation;
