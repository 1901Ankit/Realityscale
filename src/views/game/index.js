import React, { useState } from "react";
import "./index.css";
import { Box, Typography, Stack, useMediaQuery } from "@mui/material";
import ArrowSVG from "../../components/arrow";
import { useNavigate } from "react-router-dom";
const Game = ({ image, heading, subHeading }) => {
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const handleMouseEnter = () => {
    setIsButtonVisible(true);
  };
  const handleMouseLeave = () => {
    setIsButtonVisible(false);
  };

  const phoneMatches = useMediaQuery("(max-width:600px)");

  const navigate = useNavigate();

  const handleNavigation = () => {
    window.scrollTo(0, 0);
    navigate("/contact");
  };
  return (
    <div className="d-overlay">
      <div
        className="zoom-img"
        style={{
          backgroundImage: `url(${image})`,
          height: phoneMatches ? 220 : 220,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "100%",
        }}
      >
        <Box
          sx={{
            height: "100%",
            backgroundColor: "#00000055",
            color: "#ffffff",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "end",
            border: "2px solid transparent",
            position: "relative",
            ...(phoneMatches
              ? {}
              : {
                  ":hover": {
                    border: "none",
                    transition: "border .5s, box-shadow .5s",
                    zIndex: 1,
                    backgroundColor: "#00000055",
                    paddingLeft: "10px",
                  },
                }),
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Box
            sx={{
              paddingBottom: phoneMatches ? 2 : 3,
              paddingLeft: phoneMatches ? 3 : 3,
            }}
          >
            <Typography
              sx={{ fontSize: 18, fontWeight: 600, color: "#ffd94a" }}
              className="d-text"
            >
              {heading}
            </Typography>
            <Stack direction={"row"} alignItems={"center"} spacing={0}>
              <Typography
                sx={{ fontSize: 12, fontWeight: 100 }}
                className="d-text1"
              >
                {subHeading}
                <Box
                  className="mil-links mil-muted mil-arrow-place left-align"
                  sx={{
                    display: phoneMatches || isButtonVisible ? "block" : "none",
                    cursor: "pointer", 
                  }}
                  onClick={handleNavigation}
                >
                  Read More
                  <ArrowSVG className="mil-arrow" />
                </Box>
              </Typography>
            </Stack>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Game;
