import React from "react";
import ArrowSVG from "../../components/arrow";
import { Link } from "react-router-dom";
import { fourthParaData3 } from "../../assests/data/componentdata";

const Fourthpara3 = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="container p-0 events-content">
      <div className="row align-items-center mt-3">
        <div className="col-sm-10 lormips">
          <div style={{ paddingLeft: "40px" }}>
            <h2 className="onbord mb-4">{fourthParaData3.title}</h2>
            <p className="skills_para mb-4">{fourthParaData3.paragraph}</p>
            <Link
              to={fourthParaData3.linkTo}
              onClick={handleClick}
              className="mil-links mil-dark mil-arrow-place mil-up"
            >
              <span className="mil-label mil-upper mil-accent text-grey">
                {fourthParaData3.linkText}
              </span>
              <ArrowSVG className="mil-arrow" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fourthpara3;
