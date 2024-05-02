import {
  Box,
  Container,
  IconButton,
  Slider,
  Stack,
  Step,
  StepLabel,
  Stepper,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Eight from "../displayComponent/Eight";
import Component from "../displayComponent/component";
import Fifth from "../displayComponent/fifth";
import Fourth from "../displayComponent/fourth";
import Nine from "../displayComponent/nine";
import SecondComponent from "../displayComponent/secondComponent";
import Seven from "../displayComponent/seven";
import Sixth from "../displayComponent/six";
import Third from "../displayComponent/third";
import "./index.css";

const Range = () => {
  const [activeStep, setActiveStep] = useState(0);
  const handlePrev = () => {
    setActiveStep((prevStep) =>
      prevStep === 0 ? components.length - 1 : prevStep - 1
    );
  };

  const handleNext = () => {
    setActiveStep((prevStep) =>
      prevStep === components.length - 1 ? 0 : prevStep + 1
    );
  };
  const components = [
    <Component handleNext={handleNext} handlePrev={handlePrev} />,
    <SecondComponent />,
    <Third />,
    <Fourth />,
    // <Fifth />,
    // <Sixth />,
    // <Seven />,
    // <Eight />,
    // <Nine />,
  ];
  const componentLabel = [
    {
      label: "EMPOWER YOUR VISION",
    },
    {
      label: "SEAMLESS ACCESS",
    },
    {
      label: "INTELLIGENT AI ASSISTANCE",
    },
    {
      label: "STREAMLINED MARKETING",
    },
    // {
    //   label: "BOOST SALES ENGAGEMENT",
    // },
  ];
  

  const handleSliderChange = (event, newValue) => {
    setActiveStep(newValue);
  };

  return (
    <div className=" mil-dark-bg pb-5">
    <div className="mi-invert-fix">
      <div>
        <p className="keyfetR text-center pt-5">OUR USP</p>
        <p className="keyfet text-center"> Every Detail Counts</p>
      </div>
      <div className="container" style={{ maxWidth: 1080 }}>
        <Stepper
          activeStep={activeStep}
          alternativeLabel
          style={{
            position: "relative",
            borderBottom: "none",
            boxShadow: "none",
          }} // Remove the bottom border
        >
          {componentLabel.map((component, index) => (
            <Step
              key={index}
              sx={{
                "& .MuiStepConnector-line": {
                  border: "none",
                },
                " & .MuiStepLabel-iconContainer": {
                  display: "none",
                },
                "& .MuiStepLabel-label": {
                  color: "#fff ",
                  fontSize: 11,
                },
                "& .MuiStepLabel-label.Mui-active": {
                  color: "#fff ",
                },
                "& .MuiStepLabel-label.Mui-completed": {
                  color: "#fff ",
                },
                "&": {
                  top: "55px",
                },
              }}
            >
              <StepLabel>{component.label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {/* <IconButton onClick={handlePrev}>
          <FaChevronLeft/>
        </IconButton> */}

        <Slider
          value={activeStep}
          onChange={handleSliderChange}
          min={0}
          max={components.length - 1}
          step={1}
          marks
          aria-labelledby="slider-label"
          sx={{
            "&.MuiSlider-root": {
              color: "#fff",
              left: "80px",
              width: "87%",
            },
            "& .MuiSlider-thumb": {
              display: "none",
            },
          }}
        />

        <Stack direction={"row"} alignItems={"center"} spacing={0} mt={5}>
          <IconButton onClick={handlePrev}>
            <FaChevronLeft color="#fff" />
          </IconButton>
          <div className="container">

          <div className="text-start">{components[activeStep]}</div>
          </div>
          <IconButton onClick={handleNext}>
            <FaChevronRight color="#fff" />
          </IconButton>
        </Stack>
      </div>
    </div>
    </div>
  );
};

export default Range;
