import React, { Component } from "react";
import { Link } from "react-router-dom";
class Pagination extends Component {
  render() {
    const pagePrev = this.props.pagePrev;
    const pageNext = this.props.pageNext;

    return (
      <div className="pagination">
        {pagePrev ? (
          <Link id="btPagiPrev" to={pagePrev}>
            Précédent :
          </Link>
        ) : (
          <span></span>
        )}

        {pageNext ? (
          <>
            <div className="pagiBulle">
              <div id="pagiContent">
                <div id="pagiStep">0 %</div>

                <div id="pagiAvancement"></div>
              </div>
            </div>
            <Link id="btPagiNext" to={pageNext}>
              Suivant
            </Link>
          </>
        ) : (
          <span></span>
        )}
      </div>
    );
  }
}

export default Pagination;
