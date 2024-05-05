import React, { useState } from "react";
import "./index.css";
import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import arrow from "../../assests/images/svg/arrow.png";
import ArrowSVG from "../../components/arrow";
const Game = ({ image, heading, subHeading, price }) => {
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsButtonVisible(true);
  };

  const handleMouseLeave = () => {
    setIsButtonVisible(false);
  };
  const phoneMatches = useMediaQuery("(max-width:600px)");

  return (
    <div>
      <div
        className="d-overlay"
        style={{
          backgroundImage: `url(${image})`,
          height: phoneMatches ? 200 : 200,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          // borderRadius: 10,
          width: "100%",
        }}
      >
        <Box
          sx={{
            height: "100%",
            backgroundColor: "#00000039",
            color: "#ffffff",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "end",
            border: "2px solid transparent",
            position: "relative",
            ":hover": {
              border: "2px solid #ffd94a",
              transition: "border .5s, box-shadow .5s",
              zIndex: 1,
              background:
                "linear-gradient(0, rgba(0, 0, 0, .75), transparent 50%)",
              // borderRadius: "10",
            },
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Box sx={{ paddingBottom: 1, paddingLeft: 1 }}>
            <Typography
              sx={{ fontSize: 20, fontWeight: 600 }}
              className="d-text"
            >
              {heading}
            </Typography>
            <Stack direction={"row"} alignItems={"center"} spacing={0}>
              <Typography
                sx={{ fontSize: 20, fontWeight: 600 }}
                className="d-text"
              >
                {subHeading}
              </Typography>
              <Box
                className="mil-link mil-muted mil-arrow-place left-align "
                sx={{
                  display: isButtonVisible ? "block" : "none",
                  transform: isButtonVisible
                    ? "translateY(0)"
                    : "translateY(100%)",
                  transition: "transform 0.5s ease-in-out",
                }}
              >
                Read More
                <ArrowSVG className="mil-arrow" fill="#000" />{" "}
              </Box>
            </Stack>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Game;
