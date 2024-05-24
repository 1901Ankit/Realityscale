import React from "react";
import Aos from "aos";
import ArrowSVG from "../../components/arrow";
const Sevenpara = () => {
  Aos.init();
return (
    <div className="container p-0 events-content">
    <div className="row align-items-center mt-3">
    <div className="col-sm-10 lormips">
        <div className=""style={{paddingLeft:"40px"}}>
          <h2 className="onbord mb-4">SEAMLESS ACCESS</h2>
          <p className="skills_para mb-4">
            When it comes to industry-leading graphics, there's a select group
            of companies and technologies that stand out for their
            cutting-edge advancements and innovative approaches.
          </p>
          <div className="mil-links mil-dark mil-arrow-place mil-up">
                    <span className="mil-label mil-upper mil-accent text-grey">Read more</span>
                    <ArrowSVG className="mil-arrow" />
                  </div>
        </div>
      </div>
    </div>
  </div>
);
};

export default Sevenpara;