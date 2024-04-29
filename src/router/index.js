import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar";
import Home from "../views/home";
import Footer from "../components/footer";

import Loader from "../components/loader";

const Router = () => {
  // const [isLoading, setIsLoading] = useState(true);
  // const [loadingComplete, setLoadingComplete] = useState(false);

  // useEffect(() => {
  //   if (!loadingComplete) {
  //     const timeout = setTimeout(() => {
  //       setIsLoading(false);
  //       setLoadingComplete(true);
  //     }, 4000);

  //     return () => clearTimeout(timeout);
  //   }
  // }, [loadingComplete]);

  return (
    <BrowserRouter>
      {/* {!loadingComplete ? (
        <Loader />
      ) : ( */}
        <>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
          <Footer />
        </>
      {/* // )} */}
    </BrowserRouter>
  );
};

export default Router;