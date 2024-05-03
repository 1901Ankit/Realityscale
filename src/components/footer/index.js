import React from "react";
import "./index.css";
import logo from "../../assests/images/logo/newlogo/Reality Scale Logo White 04.png";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import ArrowSVG from "../arrow";
const Navigation = () => {
  return (
    <nav className="mil-footer-menu mil-mb-30">
      <ul className="p-0">
        <li className="mil-up ">
          <a href="/">Home</a>
        </li>
        <li className="mil-up ">
          <a href="/team">Team</a>
        </li>
        <li className="mil-up">
          <a href="#">Services</a>
        </li>
        <li className="mil-up">
          <a href="/contact">Contact</a>
        </li>
        <li className="mil-up">
          <a href="#">Blog</a>
        </li>
      </ul>
    </nav>
  );
};

const MenuList = () => {
  return (
    <ul className="mil-menu-list mil-up mil-mb-30 p-0">
      <li>
        <a href="#." className="mil-light-soft">
          Privacy Policy
        </a>
      </li>
      <li>
        <a href="#." className="mil-light-soft">
          Terms and conditions
        </a>
      </li>
      <li>
        <a href="#." className="mil-light-soft">
          Cookie Policy
        </a>
      </li>
      <li>
        <a href="#." className="mil-light-soft">
          Careers
        </a>
      </li>
    </ul>
  );
};

const Address = () => {
  return (
    <>
      <h6 className="mil-muted mil-up mil-mb-10">Noida</h6>
      <p className="mil-light-soft mil-up">
        2nd Floor, D-320, Sector 63 Rd, Sector 63, Noida, Uttar Pradesh, 201307
      </p>
    </>
  );
};

const SocialIcons = () => {
  return (
    <ul className="mil-social-icons mil-up">
      <li>
        <a href="#." target="_blank" className="social-icon">
          {" "}
          <FaInstagram />
        </a>
      </li>
      <li>
        <a href="#." target="_blank" className="social-icon">
          {" "}
          <FaYoutube />
        </a>
      </li>
      <li>
        <a href="#." target="_blank" className="social-icon">
          {" "}
          <FaXTwitter />
        </a>
      </li>
      <li>
        <a href="#." target="_blank" className="social-icon">
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
        <div className="container mil-p-120-60">
          <div className="row justify-content-between">
            <div className="col-md-4 col-lg-4 mil-mb-60">
              <div class="main-footer__about">
                <p class="footer-widget__text">Let’s start working together</p>
                <a href="#">help@company.com</a>
              </div>
              <div className="mil-muted mil-logo mil-up mil-mb-30 mt-4 ">
                <img src={logo} style={{ width: "50%" }} />
              </div>
              <p className="mil-light-soft mil-up mil-mb-30 mt-5">
                Subscribe our newsletter:
              </p>
              <form className="mil-subscribe-form mil-up">
                <input type="text" placeholder="Enter our email" />
                <button
                  type="submit"
                  className="mil-button mil-icon-button-sm mil-arrow-place"
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
                <div className="col-md-6 col-lg-5">
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
                <div className="col-md-6 col-lg-5">
                  <Address />
                </div>
                {/* <div className="col-md-6 col-lg-5">
                  <Address />
                </div> */}
              </div>
            </div>
            <div className="col-md-4 col-lg-6 mil-mb-20">
              {/* {/ Social icons /} */}
              <div className="mil-vert-between">
                <div className="mil-mb-30">
                  <SocialIcons />
                </div>
                <p className="mil-light-soft mil-up">
                  © Copyright 2024 - Reality-Scale. All Rights Reserved.
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
