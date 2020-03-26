import React from "react";
import { Link } from "react-router-dom";
const Pagination = props => {
  const { params, numstep, handlePagePrev, handlePageNext } = props;
  let value = numstep === 0 ? 0 : (numstep / 7) * 100;
  value = value.toFixed(0).concat("%");

  const pagePrev = params.pagePrev;
  const pageNext = params.pageNext;

  return (
    <div className="pagination">
      {pagePrev ? (
        <Link id="btPagiPrev" onClick={() => handlePagePrev()} to={pagePrev}>
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
          <Link id="btPagiNext" onClick={() => handlePageNext()} to={pageNext}>
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
