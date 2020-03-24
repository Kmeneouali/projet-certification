import React, { Component } from "react";
import steps from "../configs/prams";
import SelectionItems from "../components/SelectionItems";
import Pagination from "../components/Pagination";
class LastStep extends Component {
  render() {
    const step = this.props.step;
    return (
      <>
        <h2>{steps[step].title}</h2>
        <div className="padContent">
          <span>
            Votre numéro de dossier est le : <b className="gras">21087694</b>
          </span>
        </div>
        <div>
          <Pagination
            pagePrev={steps[step].pagePrev}
            pageNext={steps[step].pageNext}
          />
        </div>
      </>
    );
  }
}

export default LastStep;
