import { useEffect, useState } from "react";
import "./index.css";
import { NavLink, useLocation } from "react-router-dom";
// import logo from "../../assests/images/logo/Reality Scale Logo White.svg";
function Navbar() {
  // const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  let links = [
    {
      name: "About Us",
      url: "photoframe",
    },
    {
      name: "Products",
      url: "/photoframe",
    },
    {
      name: "Showcase",
      url: "show-case",
    },

    {
      name: "Features",
      url: "photoframe",
    },
    {
      name: "Contact Us",
      url: "/",
    },
  ];
  return (
    <>
      <div className="container-fluid ">
        <div className="container">
          {/* <div className="" style={{ position: "relative" }}>
            <div className="Navbar">
              <NavLink to="/">
                <img src={logo} className="logo" />
              </NavLink>
              <div className={`nav-items ${isOpen && "open"}`}>
                {links.map((val) => (
                  <NavLink
                    onClick={() => setIsOpen(false)}
                    className="link"
                    to={val.url}
                  >
                    {val.name}
                  </NavLink>
                ))}
              </div>
              <div
                className={`nav-toggle ${isOpen && "open"}`}
                onClick={() => setIsOpen(!isOpen)}
              >
                <div className="bar"></div>
              </div>
            </div>
          </div> */}
          {/* <div className="Navbar">
            <div className="d-flex align-items-center justify-content-between">
              <div>
                {" "}
                <NavLink to="/">
                  <img src={logo} className="logo" />
                </NavLink>
              </div>
              <div>
                {" "}
                <div className={`nav-items ${isOpen && "open"}`}>
                  {links.map((val) => (
                    <NavLink
                      onClick={() => setIsOpen(false)}
                      className="link"
                      to={val.url}
                    >
                      {val.name}
                    </NavLink>
                  ))}
                </div>
              </div>
              <div>
                {" "}
                <div
                  className={`nav-toggle ${isOpen && "open"}`}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <div className="bar"></div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Navbar;
