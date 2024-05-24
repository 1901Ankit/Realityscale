import React, { useEffect, useRef } from "react";
import Home from "../home";
import Keyfeature from "../keyfeature";
import Range from "../../components/rngecaroul";
import About from "../about";

const ScrollerComponent = () => {
  const htmlRef = useRef(document.documentElement);
  const bodyRef = useRef(document.body);
  const scrollerRef = useRef({
    target: null,
    ease: 0.05, // <= scroll speed
    endY: 0,
    y: 0,
    resizeRequest: 1,
    scrollRequest: 0,
    requestId: null,
  });

  useEffect(() => {
    const scroller = scrollerRef.current;

    scroller.target = document.querySelector("#scroll-container");

    const onLoad = () => {
      updateScroller();
      window.focus();
      window.addEventListener("resize", onResize);
      document.addEventListener("scroll", onScroll);
    };

    const updateScroller = () => {
      const resized = scroller.resizeRequest > 0;

      if (resized) {
        const height = scroller.target.clientHeight;
        bodyRef.current.style.height = height + "px";
        scroller.resizeRequest = 0;
      }

      const scrollY =
        window.pageYOffset ||
        htmlRef.current.scrollTop ||
        bodyRef.current.scrollTop ||
        0;

      scroller.endY = scrollY;
      scroller.y += (scrollY - scroller.y) * scroller.ease;

      if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
        scroller.y = scrollY;
        scroller.scrollRequest = 0;
      }

      scroller.target.style.transform = `translateY(${-scroller.y}px)`;

      scroller.requestId =
        scroller.scrollRequest > 0
          ? requestAnimationFrame(updateScroller)
          : null;
    };

    const onScroll = () => {
      scroller.scrollRequest++;
      if (!scroller.requestId) {
        scroller.requestId = requestAnimationFrame(updateScroller);
      }
    };

    const onResize = () => {
      scroller.resizeRequest++;
      if (!scroller.requestId) {
        scroller.requestId = requestAnimationFrame(updateScroller);
      }
    };

    window.addEventListener("load", onLoad);

    return () => {
      window.removeEventListener("load", onLoad);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div>
      <div id="scroll-container">
      </div>
    </div>
  );
};

export default ScrollerComponent;
