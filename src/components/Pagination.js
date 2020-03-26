import React from "react";
import { Link } from "react-router-dom";
const Pagination = props => {
  const { step } = props;
  const handlePageNext = () => {
    props.handlePageNext();
  };
  const handlePagePrev = () => {
    props.handlePagePrev();
  };
  // pagePrev={steps[step].pagePrev}
  // pageNext={steps[step].pageNext}
  //
  const pagePrev = step.pagePrev;
  const pageNext = step.pageNext;

  return (
    <div className="pagination">
      {pagePrev ? (
        <Link id="btPagiPrev" onClick={handlePagePrev} to={pagePrev}>
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
          <Link id="btPagiNext" onClick={handlePageNext} to={pageNext}>
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
