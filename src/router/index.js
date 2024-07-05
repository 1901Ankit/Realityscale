import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "../views/home";
import Footer from "../components/footer";
import CTA from "../components/cta";
import Member from "../views/team_member";
import Contactus from "../views/contact";
import Product from "../views/product";
import Privacy from "../views/privacy";
import Terms from "../views/terms";
import Productdetails from "../views/productdetails";
import DEMOREALITY from "../views/demoreality";
import Navbar from "../components/navbar";
import Mouse from "../components/mouse";
import Progressbar from "../components/progressbar";

const Router = () => {
  const location = useLocation();

  return (
    <>
    {location.pathname !== "/demoreality" && <Navbar />}
    <Mouse/>
    <Progressbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/team" element={<Member />} />
        <Route exact path="/contact" element={<Contactus />} />
        <Route exact path="/product" element={<Product />} />
        <Route exact path="/productdetails" element={<Productdetails />} />
        <Route exact path="/privacy" element={<Privacy />} />
        <Route exact path="/terms" element={<Terms />} />
        <Route exact path="/demoreality" element={<DEMOREALITY />} />
      </Routes>
      {location.pathname !== "/demoreality" && (
        <>
          <CTA />
          <Footer />
        </>
      )}
    </>
  );
};

export default Router;
