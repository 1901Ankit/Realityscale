import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../views/home";
import Footer from "../components/footer";
import CTA from "../components/cta";
import Member from "../views/team_member";
import Contactus from "../views/contact";
import Product from "../views/product";
import Productdetail from "../views/productdetail";

const Router = () => {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/team" element={<Member />} />
          <Route exact path="/contact" element={<Contactus />} />
          <Route exact path="/product" element={<Product />} />
          <Route exact path="/productdetail" element={<Productdetail />} />
        </Routes>
        <CTA />
        <Footer />
      </>
    </BrowserRouter>
  );
};

export default Router;
