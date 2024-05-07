import React, { useEffect } from "react";
import "./index.css";

const Mouse = () => {
  useEffect(() => {
    const handleMove = (e) => {
      const { clientX, clientY } = e;
      const cursor = document.querySelector(".custom-cursor__cursor");
      cursor.style.transform = `translate3d(calc(${clientX}px - 50%), calc(${clientY}px - 50%), 0)`;
      document.querySelector(
        ".custom-cursor__cursor-two"
      ).style.cssText = `left: ${clientX}px; top: ${clientY}px`;
    };

    const handleDown = () =>
      document.querySelector(".custom-cursor__cursor").classList.add("click");
    const handleUp = () =>
      document
        .querySelector(".custom-cursor__cursor")
        .classList.remove("click");
    const handleHover = () =>
      document
        .querySelector(".custom-cursor__cursor")
        .classList.add("custom-cursor__hover");
    const handleLeave = () =>
      document
        .querySelector(".custom-cursor__cursor")
        .classList.remove("custom-cursor__hover");

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mousedown", handleDown);
    document.addEventListener("mouseup", handleUp);
    document.querySelectorAll("a").forEach((link) => {
      link.addEventListener("mouseover", handleHover);
      link.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mousedown", handleDown);
      document.removeEventListener("mouseup", handleUp);
      document.querySelectorAll("a").forEach((link) => {
        link.removeEventListener("mouseover", handleHover);
        link.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="custom-cursor__cursor"></div>
      <div className="custom-cursor__cursor-two"></div>
    </>
  );
};

export default Mouse;
