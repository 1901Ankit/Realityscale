import React, { useEffect } from "react";
import "./index.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Mouse = () => {
  //----scrolldown----//
  function setupAnimations() {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    const appearances = document.querySelectorAll(".mil-up");
    appearances.forEach((section) => {
      gsap.fromTo(
        section,
        {
          opacity: 0,
          y: 40,
          scale: 0.98,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: "sine",
          scrollTrigger: {
            trigger: section,
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    const scaleImages = document.querySelectorAll(".mil-scale");
    scaleImages.forEach((section) => {
      const value1 = parseFloat(section.getAttribute("data-value-1"));
      const value2 = parseFloat(section.getAttribute("data-value-2"));
      gsap.fromTo(
        section,
        {
          scale: value1,
        },
        {
          scale: value2,
          ease: "sine",
          scrollTrigger: {
            trigger: section,
            scrub: true,
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    if (window.innerWidth > 960) {
      const parallaxImages = document.querySelectorAll(".mil-parallax");
      parallaxImages.forEach((section) => {
        const value1 = parseFloat(section.getAttribute("data-value-1"));
        const value2 = parseFloat(section.getAttribute("data-value-2"));
        gsap.fromTo(
          section,
          {
            y: value1,
          },
          {
            y: value2,
            ease: "sine",
            scrollTrigger: {
              trigger: section,
              scrub: true,
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      const rotateSections = document.querySelectorAll(".mil-rotate");
      rotateSections.forEach((section) => {
        const value = parseFloat(section.getAttribute("data-value"));
        gsap.to(section, {
          rotation: value,
          ease: "sine",
          scrollTrigger: {
            trigger: section,
            scrub: true,
            toggleActions: "play none none reverse",
          },
        });
      });
    }
  }

  window.addEventListener("load", setupAnimations);

  //------endscrolldown-----//
  document.addEventListener("DOMContentLoaded", setupAnimations);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const handleMouseMove = (e) => {
      const cursor = document.querySelector(".custom-cursor__cursor");
      const cursorInner = document.querySelector(".custom-cursor__cursor-two");
      cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
      cursorInner.style.left = e.clientX + "px";
      cursorInner.style.top = e.clientY + "px";
    };
    const handleMouseDown = () => {
      const cursor = document.querySelector(".custom-cursor__cursor");
      const cursorInner = document.querySelector(".custom-cursor__cursor-two");
      cursor.classList.add("click");
      cursorInner.classList.add("custom-cursor__innerhover");
    };
    const handleMouseUp = () => {
      const cursor = document.querySelector(".custom-cursor__cursor");
      const cursorInner = document.querySelector(".custom-cursor__cursor-two");
      cursor.classList.remove("click");
      cursorInner.classList.remove("custom-cursor__innerhover");
    };
    const handleLinkHover = (e) => {
      const cursor = document.querySelector(".custom-cursor__cursor");
      cursor.classList.add("custom-cursor__hover");
    };
    const handleLinkLeave = () => {
      const cursor = document.querySelector(".custom-cursor__cursor");
      cursor.classList.remove("custom-cursor__hover");
    };
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("mouseover", handleLinkHover);
      link.addEventListener("mouseleave", handleLinkLeave);
    });
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      links.forEach((link) => {
        link.removeEventListener("mouseover", handleLinkHover);
        link.removeEventListener("mouseleave", handleLinkLeave);
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
