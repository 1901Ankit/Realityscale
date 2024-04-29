import React,{useState} from "react";
import "./index.css";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import backgroundImage from "../../assests/images/landing/1.9f88f939.webp";
const Game = ({ image, heading, subHeading, price }) => {
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsButtonVisible(true);
  };

  const handleMouseLeave = () => {
    setIsButtonVisible(false);
  };

  return (
    <div>
      <div
        className="d-overlay"
        style={{
          backgroundImage: `url(${image})`,
          height: 400,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          borderRadius: 8,

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
        border: "5px solid transparent",
        position: "relative",
        ":hover": {
          border: "5px solid #ffd94a",
          transition: "border .5s, box-shadow .5s",
          zIndex: 1,
          background: "linear-gradient(0, rgba(0, 0, 0, .75), transparent 50%)",
        },
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Box sx={{ paddingBottom: 2, paddingLeft: 1 }}>
        <Typography sx={{ fontSize: 20, fontWeight: 600 }} className="d-text">
          {heading}
        </Typography>
        <Stack direction={"row"} alignItems={"center"} spacing={1}>
          <Typography>{subHeading}</Typography>
          <Box
            sx={{
              backgroundColor: "#6A79FA",
              p: 0.2,
              borderRadius: 2,
              fontWeight: 600,
              display: isButtonVisible ? "block" : "none",
              transform: isButtonVisible ? "translateY(0)" : "translateY(100%)",
              transition: "transform 0.5s ease-in-out",
            }}
          >
            <Button variant="contained" color="primary" className="buntclick">
              Click me
            </Button>
          </Box>
        </Stack>
      </Box>
    </Box>
      </div>
    </div>
  );
};

export default Game;
