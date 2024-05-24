import React from "react";
import ArrowSVG from "../../components/arrow";
import Aos from "aos";
import { Link } from "react-router-dom";
import { componentData } from "../../assests/data/componentdata";

const Componentpara = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="container p-0 events-content">
      <div className="row align-items-center mt-3">
        <div className="col-sm-10 lormips">
          <div className="" style={{ paddingLeft: "40px" }}>
            <h2 className="multiplyer mb-4">{componentData.title}</h2>
            <p className="skills_para mb-4">{componentData.paragraph}</p>
            <Link
              to={componentData.linkTo}
              onClick={handleClick}
              className="mil-links mil-dark mil-arrow-place mil-up"
            >
              <span className="mil-label mil-upper mil-accent text-grey">
                {componentData.linkText}
              </span>
              <ArrowSVG className="mil-arrow" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Componentpara;
