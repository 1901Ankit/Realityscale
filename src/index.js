import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/custom.css";
import "react-multi-carousel/lib/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "gsap/ScrollTrigger";
import "gsap";
import "gsap/ScrollToPlugin";
import "animate.css";
import "aos/dist/aos.css";

// function SmoothScroll() {
//   useEffect(() => {
//     const initializeSmoothScroll = () => {
//       const jsScroll = document.querySelector(".js-scroll");
//       const body = document.body;

//       if (!jsScroll) return; // Ensure the element is available

//       const height = jsScroll.getBoundingClientRect().height - 1;
//       const speed = 45;
//       let offset = 0;

//       body.style.height = Math.floor(height) + "px";

//       function smoothScroll() {
//         offset += (window.pageYOffset - offset) * speed;
//         const scroll = "translateY(-" + offset + "px) translateZ(0)";
//         jsScroll.style.transform = scroll;
//         requestAnimationFrame(smoothScroll);
//       }

//       smoothScroll();
//     };

//     document.addEventListener("DOMContentLoaded", initializeSmoothScroll);

//     return () => {
//       document.removeEventListener("DOMContentLoaded", initializeSmoothScroll);
//     };
//   }, []);

//   return (
//     <div class="js-cont">
//       <div class="js-scroll">
//         <div class="full-screen"></div>
//         <div class="full-screen"></div>
//       </div>
//     </div>
//   );
// }

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
