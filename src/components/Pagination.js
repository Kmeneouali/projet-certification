import React from "react";
import { Link, useLocation } from "react-router-dom";

const Pagination = props => {
  let location = useLocation();
  const { params, numstep, handlePagePrev, handlePageNext, inputs } = props;
  // calcul du pourcentage de la barre de progression
  let value = numstep === 0 ? 0 : (numstep / 7) * 100;
  value = value.toFixed(0).concat("%");
  // liste des id input pour les valider
  const _inputs = inputs !== null ? inputs : [];

  let pagePrev = params.pagePrev;
  let pageNext = params.pageNext;
  const handlepageNext = () => {
    const nextStep = handlePageNext(numstep, _inputs);

    if (numstep === nextStep) {
      pageNext = location.pathname;
    } else {
      pagePrev = params.pagePrev;
      pageNext = params.pageNext;
    }
  };

  return (
    <div className="pagination">
      {pagePrev ? (
        <Link
          id="btPagiPrev"
          onClick={() => handlePagePrev(_inputs)}
          to={pagePrev}
        >
          Précédent :
        </Link>
      ) : (
        <span></span>
      )}

      {pageNext ? (
        <>
          <div className="pagiBulle">
            <div id="pagiContent">
              <div id="pagiStep" style={{ left: value }}>
                {value}
              </div>

              <div id="pagiAvancement" style={{ width: value }}></div>
            </div>
          </div>
          {/* <Link
            id="btPagiNext"
            onClick={() => handlePageNext(numstep, _inputs)}
            to={pageNext}
          > */}
          <Link
            id="btPagiNext"
            to={location => ({ ...location, pathname: pageNext })}
            onClick={() => handlepageNext()}
          >
            Suivant
          </Link>
        </>
      ) : (
        <span></span>
      )}
    </div>
  );
};

export default Pagination;
