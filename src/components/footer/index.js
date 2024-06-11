import React from "react";
import "./index.css";
import logo from "../../assests/images/logo/newlogo/Reality Scale Logo White 04.png";
// import { FaInstagram } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import ArrowSVG from "../arrow";
import { useNavigate } from "react-router-dom";
const Navigation = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    window.scrollTo(0, 0);
    navigate("/contact");
  };
  const handlehomeClick = () => {
    window.scrollTo(0, 0);
    navigate("/");
  };
  const handleproductClick = () => {
    window.scrollTo(0, 0);
    navigate("/product");
  };
  const handleteamClick = () => {
    window.scrollTo(0, 0);
    navigate("/team");
  };
 
  return (
    <nav className="mil-footer-menu mil-mb-30">
      <ul className="p-0">
        <li className="mil-up ">
          <span onClick={handlehomeClick}>Home</span>
        </li>
        <li className="mil-up ">
          <span onClick={handleteamClick}>Team</span>
        </li>
        <li className="mil-up">
          <span onClick={handleproductClick}>Product</span>
        </li>
        <li className="mil-up">
          <span onClick={handleContactClick}>Contact</span>
        </li>
      </ul>
    </nav>
  );
};

const MenuList = () => {
  return (
    <ul className="mil-menu-list mil-up mil-mb-30 p-0 fw-200">
      <li>
        <a href="/privacy" className="mil-light-soft">
          Privacy Policy
        </a>
      </li>
      <li>
        <a href="/terms" className="mil-light-soft">
          Terms and conditions
        </a>
      </li>
      <li>
        <a href="#" className="mil-light-soft">
          Cookie Policy
        </a>
      </li>
      <li>
        <a href="#" className="mil-light-soft">
          Careers
        </a>
      </li>
    </ul>
  );
};

const Address = () => {
  return (
    <>
      <h6 className="mil-muted mil-up mil-mb-10">INDIA</h6>
      <p className="mil-light-soft mil-up fw-200">
        2nd Floor, D-320, Sector 63, Noida, Uttar Pradesh, 201307 INDIA
      </p>
    </>
  );
};
const Address2 = () => {
  return (
    <>
      <h6 className="mil-muted mil-up mil-mb-10">USA</h6>
      <p className="mil-light-soft mil-up fw-200">
        30 N Gould St Ste R Sheridan, WY 82801 USA
      </p>
    </>
  );
};

const SocialIcons = () => {
  return (
    <ul className="mil-social-icons mil-up">
      <li>
        <a href="#" target="_blank" className="social-icon">
          {" "}
          <RiInstagramFill />
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UCg0f7WD6d_-9N-wCN93cnPA" target="_blank" className="social-icon">
          {" "}
          <FaYoutube />
        </a>
      </li>
      <li>
        <a href="#" target="_blank" className="social-ic
        on">
          {" "}
          <FaXTwitter />
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/realityscale/" target="_blank" className="social-icon">
          {" "}
          <FaFacebook />
        </a>
      </li>
    </ul>
  );
};

const Footer = () => {
  return (
    <footer className="mil-dark-back">
      <div className="mi-inverter-fix">
        <div className="container mil-p-120-30">
          <div className="row justify-content-between">
            <div className="col-md-4 col-lg-4 mil-mb-60">
              <div className="main-footer__about">
                <p className="footer-widget__text fw-400">
                  Let’s start working together
                </p>
                <a href="#">+91 8800291352</a>
              </div>
              <div className="mil-muted mil-logo mil-up mil-mb-30 mt-4 ">
                <img src={logo} style={{ width: "50%" }} />
              </div>
              <p className="mil-light-soft mil-up mil-mb-30 mt-5 fw-200">
                Subscribe our newsletter:
              </p>
              <form className="mil-subscribe-form mil-up">
                <input type="text" placeholder="Enter our email" />
                <button
                  type="submit"
                  className="mil-button mil-icon-button-sm2 mil-arrow-place"
                >
                  <ArrowSVG className="mil-arrow" fill="#000000" />
                </button>
              </form>
            </div>
            <div className="col-md-7 col-lg-6">
              {/* Navigation */}
              <div className="row justify-content-end">
                {/* Footer menu */}
                <div className="col-md-6 col-lg-7">
                  <Navigation />
                </div>
                {/* Menu list */}
                <div className="col-md-6 col-lg-5 fw-200">
                  <MenuList />
                </div>
              </div>
            </div>
          </div>
          {/* Additional content */}
          <div className="row justify-content-between flex-sm-row-reverse">
            <div className="col-md-7 col-lg-6">
              {/* {/ Address /} */}
              <div className="row justify-content-between">
                <div className="col-md-6 col-lg-6">
                  <Address />
                </div>
                <div className="col-md-6 col-lg-6">
                  <Address2 />
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-6 mil-mb-20">
              {/* {/ Social icons /} */}
              <div className="mil-vert-between">
                <div className="mil-mb-30">
                  <SocialIcons />
                </div>

                <p className="mil-light-soft mil-up fw-200 copywrite">
                  ©Copyright 2024 - Reality Sacle LLC &
                  <a
                    href="https://www.digixito.com/"
                    className="mx-1 text-white"
                  >
                    Digixito Media Private Limited.
                  </a>
                  <span className="text-grey">All Rights Reserved.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
