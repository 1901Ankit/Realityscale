import React, { useEffect, useRef } from "react";
import "./index.css";

const Mouse = () => {
  const cursorRef = useRef(null);
  const cursorTwoRef = useRef(null);

  useEffect(() => {
    const handleMove = (e) => {
      const { clientX, clientY } = e;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(calc(${clientX}px - 50%), calc(${clientY}px - 50%), 0)`;
      }
      if (cursorTwoRef.current) {
        cursorTwoRef.current.style.left = `${clientX}px`;
        cursorTwoRef.current.style.top = `${clientY}px`;
      }
    };

    const handleDown = () => cursorRef.current.classList.add("click");
    const handleUp = () => cursorRef.current.classList.remove("click");
    const handleHover = () => cursorRef.current.classList.add("custom-cursor__hover");
    const handleLeave = () => cursorRef.current.classList.remove("custom-cursor__hover");

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    document.querySelectorAll("a").forEach((link) => {
      link.addEventListener("mouseover", handleHover);
      link.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      document.querySelectorAll("a").forEach((link) => {
        link.removeEventListener("mouseover", handleHover);
        link.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor__cursor"></div>
      <div ref={cursorTwoRef} className="custom-cursor__cursor-two"></div>
    </>
  );
};

export default Mouse;
