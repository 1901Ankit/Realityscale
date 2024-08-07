import {
  Box,
  Container,
  IconButton,
  Slider,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Tab,
  Tabs,
  Typography,
  linearProgressClasses,
  LinearProgress,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Component from "../displayComponent/component";
import Fourth from "../displayComponent/fourth";
import SecondComponent from "../displayComponent/secondComponent";
import Third from "../displayComponent/third";
import Componentpara from "../paracomponent/componentpara";
import Secondpara from "../paracomponent/secondpara";
import Thirdpara from "../paracomponent/thirdpara";
import Fourthpara from "../paracomponent/fourthpara";
import Fourthpara2 from "../paracomponent/fourthpara2";
import Fourthpara3 from "../paracomponent/fourthpara3";
import "./index.css";
import Aos from "aos";
import TabPanel from "../tab-panel";
import Fifth from "../displayComponent/fifth";
import Sixth from "../displayComponent/six";
import Sixth2 from "../displayComponent/six2";
import Sixth3 from "../displayComponent/six3";
import Fifthpara from "../paracomponent/fifthpara";
import Fifthpara2 from "../paracomponent/fifthpara2";
import Fifthpara3 from "../paracomponent/fifthpara3";
import Sixthpara from "../paracomponent/sixthpara";
import Sixthpara2 from "../paracomponent/sixthpara2";
import Sixthpara3 from "../paracomponent/sixthpara3";
import ArrowSVG from "../arrow";
import { Link } from "react-router-dom";
import Fourth2 from "../displayComponent/fourth2";
import Fourth3 from "../displayComponent/fourth3";

const Range = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  Aos.init();
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
  const handlerPrev = () => {
    setActiveStep((prevStep) =>
      prevStep === 0 ? two.length - 1 : prevStep - 1
    );
  };

  const handlerNext = () => {
    setActiveStep((prevStep) =>
      prevStep === two.length - 1 ? 0 : prevStep + 1
    );
  };
  const handlersPrev = () => {
    setActiveStep((prevStep) =>
      prevStep === 0 ? three.length - 1 : prevStep - 1
    );
  };

  const handlersNext = () => {
    setActiveStep((prevStep) =>
      prevStep === three.length - 1 ? 0 : prevStep + 1
    );
  };
  const handlerssPrev = () => {
    setActiveStep((prevStep) =>
      prevStep === 0 ? fourth.length - 1 : prevStep - 1
    );
  };

  const handlerssNext = () => {
    setActiveStep((prevStep) =>
      prevStep === fourth.length - 1 ? 0 : prevStep + 1
    );
  };

  const components = [
    <Component handleNext={handleNext} handlePrev={handlePrev} />,
    <SecondComponent />,
    <Third />,
  ];
  const two = [
    <Fourth handleNext={handleNext} handlePrev={handlePrev} />,
    <Fourth2 />,
    <Fourth3 />,
  ];
  const three = [
    <Fifth handleNext={handleNext} handlePrev={handlePrev} />,
    <Fifth />,
    <Fifth />,
  ];
  const fourth = [
    <Sixth handleNext={handleNext} handlePrev={handlePrev} />,
    <Sixth2 />,
    <Sixth3 />,
  ];
  const paragraph = [
    <Componentpara handleNext={handleNext} handlePrev={handlePrev} />,
    <Secondpara />,
    <Thirdpara />,
  ];
  const twoparagraph = [
    <Fourthpara handleNext={handleNext} handlePrev={handlePrev} />,
    <Fourthpara2 />,
    <Fourthpara3 />,
  ];
  const threeparagraph = [
    <Fifthpara handleNext={handleNext} handlePrev={handlePrev} />,
    <Fifthpara2 />,
    <Fifthpara3 />,
  ];
  const fourthparagraph = [
    <Sixthpara handleNext={handleNext} handlePrev={handlePrev} />,
    <Sixthpara2 />,
    <Sixthpara3 />,
  ];
  const componentLabel = [
    {
      label: "Mysterium VR Game",
    },
    {
      label: "Mahindra VR Configurator",
    },
    {
      label: "We Are VR Virtual digital cone",
    },
  ];
  const twoLabel = [
    {
      label: "Mercedes Maybach Meta",
    },
    {
      label: "Honda Showroom Configurator",
    },
    {
      label: "Renault/Honda/Hyundai Online Cloud Configurator ",
    },
  ];
  const threelabel = [
    {
      label: "Reality Scale Real-Estate",
    },
    {
      label: "Fashion Project ",
    },
    {
      label: "Reality Scale Interior ",
    },
  ];
  const fourthlabel = [
    {
      label: "Disney Game Project",
    },
    {
      label: "Youth Olympics Project",
    },
    {
      label: "WNDR Platform",
    },
  ];

  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const tabsSection = [
    {
      label: "VR/AR",
    },
    {
      label: "Automotive",
    },
    {
      label: "Architectural",
    },
    {
      label: "Gaming",
    },
  ];

  // slider
  const autoSlide = () => {
    setActiveStep((prevStep) =>
      prevStep === components.length - 1 ? 0 : prevStep + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(autoSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  // liner
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const newProgress = (activeStep / (components.length - 1)) * 100;
    setProgress(newProgress);
  }, [activeStep, components.length]);
  return (
    <div className=" bg-black mobileviewrange">
      <div className="">
        <div className="container mil-p-120-30 " style={{ maxWidth: 1080 }}>
          <div className="">
            <h1 className="keyfetR text-center">SHOWCASE</h1>
            <h1 className="keyfet text-center mt-3 mb-5">
              {" "}
              Every Detail
              <span className="mil-thin mx-2 text-white">Counts</span>
            </h1>
          </div>
          <Box sx={{ width: "100%" }}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                sx={{
                  "& .MuiTab-root": { color: "grey !important", width: 200 },
                  "& .Mui-selected": { color: "#ffd94a !important" },
                  "&.css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected": {
                    color: "#ffd94a !important",
                  },
                  "& .MuiTabs-indicator": {
                    backgroundColor: "transparent !important",
                  },
                }}
              >
                {tabsSection.map((val, i) => (
                  <Tab label={val.label} key={i} />
                ))}
              </Tabs>
              <Typography color="#fff">
                <Link
                  to="/product"
                  onClick={handleClick}
                  className="mil-link mil-arrow-place"
                >
                  <span className="text-white">View all</span>
                  <ArrowSVG className="mil-arrow" fill="#000000" />
                </Link>
              </Typography>
            </Stack>
          </Box>

          <TabPanel value={value} index={0}>
            <Stack direction={"row"} alignItems={"center"} spacing={0} mt={2}>
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
            <Stepper
              activeStep={activeStep}
              alternativeLabel
              style={{
                position: "relative",
                borderBottom: "none",
                boxShadow: "none",
              }}
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
                      fontSize: 14,
                      fontFamily: "Outfit, sans-serif",
                      textAlign: "center",
                    },
                    "& .MuiStepLabel-label.Mui-active": {
                      color: "#fff ",
                    },
                    "& .MuiStepLabel-label.Mui-completed": {
                      color: "#fff ",
                    },
                    "&": {
                      top: "50px",
                    },
                  }}
                >
                  <StepLabel>{component.label}</StepLabel>
                </Step>
              ))}
            </Stepper>

            <LinearProgress
              variant="determinate"
              value={progress}
              classes={{
                bar1Determinate: "custom-bar1",
                root: "custom-root",
              }}
            />

            <Stack direction={"row"} alignItems={"center"} spacing={0} mt={5}>
              <div className="container">
                <div className="text-start">{paragraph[activeStep]}</div>
              </div>
            </Stack>
          </TabPanel>

          <TabPanel value={value} index={1}>
            <Stack direction={"row"} alignItems={"center"} spacing={0} mt={2}>
              <IconButton onClick={handlerPrev}>
                <FaChevronLeft color="#fff" />
              </IconButton>
              <div className="container">
                <div className="text-start">{two[activeStep]}</div>
              </div>
              <IconButton onClick={handlerNext}>
                <FaChevronRight color="#fff" />
              </IconButton>
            </Stack>
            <Stepper
              activeStep={activeStep}
              alternativeLabel
              style={{
                position: "relative",
                borderBottom: "none",
                boxShadow: "none",
              }}
            >
              {twoLabel.map((two, index) => (
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
                      color: "#fff",
                      fontSize: 14,
                      fontFamily: "Outfit, sans-serif",
                      // textAlign: "center",
                      // alignItems:"center",
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
                  <StepLabel>{two.label}</StepLabel>
                </Step>
              ))}
            </Stepper>

            <LinearProgress
              variant="determinate"
              value={progress}
              classes={{
                bar1Determinate: "custom-bar1",
                root: "custom-root",
              }}
            />

            <Stack direction={"row"} alignItems={"center"} spacing={0} mt={5}>
              <div className="container">
                <div className="text-start">{twoparagraph[activeStep]}</div>
              </div>
            </Stack>
          </TabPanel>

          <TabPanel value={value} index={2}>
            <Stack direction={"row"} alignItems={"center"} spacing={0} mt={2}>
              <IconButton onClick={handlersPrev}>
                <FaChevronLeft color="#fff" />
              </IconButton>
              <div className="container">
                <div className="text-start">{three[activeStep]}</div>
              </div>
              <IconButton onClick={handlersNext}>
                <FaChevronRight color="#fff" />
              </IconButton>
            </Stack>
            <Stepper
              activeStep={activeStep}
              alternativeLabel
              style={{
                position: "relative",
                borderBottom: "none",
                boxShadow: "none",
              }}
            >
              {threelabel.map((three, index) => (
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
                      fontSize: 14,
                      fontFamily: "Outfit, sans-serif",
                      textAlign: "center",
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
                  <StepLabel>{three.label}</StepLabel>
                </Step>
              ))}
            </Stepper>

            <LinearProgress
              variant="determinate"
              value={progress}
              classes={{
                bar1Determinate: "custom-bar1",
                root: "custom-root",
              }}
            />

            <Stack direction={"row"} alignItems={"center"} spacing={0} mt={5}>
              <div className="container">
                <div className="text-start">{threeparagraph[activeStep]}</div>
              </div>
            </Stack>
          </TabPanel>

          <TabPanel value={value} index={3}>
            <Stack direction={"row"} alignItems={"center"} spacing={0} mt={2}>
              <IconButton onClick={handlerssPrev}>
                <FaChevronLeft color="#fff" />
              </IconButton>
              <div className="container">
                <div className="text-start">{fourth[activeStep]}</div>
              </div>
              <IconButton onClick={handlerssNext}>
                <FaChevronRight color="#fff" />
              </IconButton>
            </Stack>
            <Stepper
              activeStep={activeStep}
              alternativeLabel
              style={{
                position: "relative",
                borderBottom: "none",
                boxShadow: "none",
              }}
            >
              {fourthlabel.map((fourth, index) => (
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
                      fontSize: 14,
                      fontFamily: "Outfit, sans-serif",
                      textAlign: "center",
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
                  <StepLabel>{fourth.label}</StepLabel>
                </Step>
              ))}
            </Stepper>

            <LinearProgress
              variant="determinate"
              value={progress}
              classes={{
                bar1Determinate: "custom-bar1",
                root: "custom-root",
              }}
            />
            <Stack direction={"row"} alignItems={"center"} spacing={0} mt={5}>
              <div className="container">
                <div className="text-start">{fourthparagraph[activeStep]}</div>
              </div>
            </Stack>
          </TabPanel>
        </div>
      </div>
    </div>
  );
};

export default Range;
