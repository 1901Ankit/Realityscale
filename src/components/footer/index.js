import React from "react";
import "./index.css";
import logo from "../../assests/images/logo/Reality Scale Logo-03.png";
const Navigation = () => {
  return (
    <nav className="mil-footer-menu mil-mb-30">
      <ul className="p-0">
        <li className="mil-up mil-active">
          <a href="home-1.html">Home</a>
        </li>
        <li className="mil-up">
          <a href="portfolio-1.html">Portfolio</a>
        </li>
        <li className="mil-up">
          <a href="services.html">Services</a>
        </li>
        <li className="mil-up">
          <a href="contact.html">Contact</a>
        </li>
        <li className="mil-up">
          <a href="blog.html">Blog</a>
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
      <h6 className="mil-muted mil-up mil-mb-10">Canada</h6>
      <p className="mil-light-soft mil-up">
        71 South Los Carneros Road, California{" "}
        <span className="mil-no-wrap">+51 174 705 812</span>
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
          <i class="fa-brands fa-instagram"></i>
        </a>
      </li>
      <li>
        <a href="#." target="_blank" className="social-icon">
          {" "}
          <i class="fa-brands fa-youtube"></i>
        </a>
      </li>
      <li>
        <a href="#." target="_blank" className="social-icon">
          {" "}
          <i className="fab fa-twitter"></i>
        </a>
      </li>
      <li>
        <a href="#." target="_blank" className="social-icon">
          {" "}
          <i class="fa-brands fa-facebook"></i>
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
                <a href="mailto:help@company.com">help@company.com</a>
              </div>
              <div className="mil-muted mil-logo mil-up mil-mb-30 mt-4 ">
                <img src={logo} style={{ width: "50%" }} />
              </div>
              <p className="mil-light-soft mil-up mil-mb-30">
                Subscribe our newsletter:
              </p>
              <form className="mil-subscribe-form mil-up">
                <input type="text" placeholder="Enter our email" />
                <button
                  type="submit"
                  className="mil-button mil-icon-button-sm mil-arrow-place"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="mil-arrow"
                  >
                    <path d="M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z"></path>
                  </svg>
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
                <div className="col-md-6 col-lg-5">
                  <Address />
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-6 mil-mb-20">
              {/* {/ Social icons /} */}
              <div className="mil-vert-between">
                <div className="mil-mb-30">
                  <SocialIcons />
                </div>
                <p className="mil-light-soft mil-up">
                  © Copyright 2024 - Mil. All Rights Reserved.
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
