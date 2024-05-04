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
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Component from "../displayComponent/component";
import Fourth from "../displayComponent/fourth";
import SecondComponent from "../displayComponent/secondComponent";
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
  ];

  const handleSliderChange = (event, newValue) => {
    setActiveStep(newValue);
  };

  return (
    <div className=" mil-dark-bg mobileviewrange">
      <div className="mi-invert-fix">
        <div>
          <h1 className="keyfetR text-center pt-5">OUR USP</h1>
          <h1 className="keyfet text-center"> Every Detail Counts</h1>
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
