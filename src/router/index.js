import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar";
// import Cube from "../views/cube";
import Home from "../views/home";
import Footer from "../components/footer";
// import Frame from "../views/photoframe";
// import ShowCase from "../views/show-case";
// import Realstate from "../views/realstate";
// import Scroll from "../components/scrolltotop";
// import ScrollToTop from "../components/scroll";
// import Loader from "../components/loader";

const Router = () => {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 4000);

  //   return () => clearTimeout(timeout);
  // }, []);

  return (
    <BrowserRouter>
      {/* {isLoading ? (
        <Loader />
      ) : ( */}
        <>
          <Navbar />
          {/* <ScrollToTop /> */}
          {/* <Scroll /> */}
          <Routes>
            <Route exact path="/" element={<Home />} />
            {/* <Route exact path="/photoframe" element={<Frame />} />
            <Route exact path="/show-case" element={<ShowCase />} />
            <Route exact path="/realstate" element={<Realstate />} /> */}
          </Routes>
          <Footer />
        </>
      {/* )} */}
    </BrowserRouter>
  );
};

export default Router;
