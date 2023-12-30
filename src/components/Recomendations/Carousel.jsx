import React, { useState } from "react";
import { Paper, Button, Box, Typography } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

const CarouselItem = ({ image }) => {
  return (
    <Box
      sx={{
        margin: { md: "0 50px", xs: "0 20px" },
        borderRadius: "12px",
        padding: "10px",
        width: "200px",
        height: "300px",
        display: "flex",
        gap: "24px",
        alignItems: "center",
        flexDirection: "column",
        objectFit: "contain",
        aspectRatio: "3/2",
        justifyContent: "center",
        boxShadow: "0px 2px 16px 0px rgba(184,184,184,1)",
      }}>
      <Box height={200} display="flex" alignItems="center">
        <img
          style={{ borderRadius: "12px" }}
          width={200}
          src={image}
          alt={`imagen`}
        />
      </Box>
      <Box>
        <Typography fontFamily="Jost">Nombre</Typography>
        <Typography fontFamily="Jost">00.00$</Typography>
      </Box>
    </Box>
  );
};

function Carousel({ images }) {
  const [activeStep, setActiveStep] = useState(1);
  const maxSteps = images.length;

  console.log(activeStep)
  while (images.length >= 5) {
    images = [...images, ...images];
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };
  
  const handleBack = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps);
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: { md: "100%", xs: "60%" },
        alignItems: "center",
        justifyContent: "center",
        margin: "50px 0",
      }}>
      <Box
        display="flex"
        alignItems="center"
        width={{ md: "100%", xs: "100%" }}
        margin="0 auto">
        <Button
          sx={{ height: "50px", width: "20px" }}
          size="small"
          onClick={handleBack}
          color="secondary">
          <KeyboardArrowLeft />
        </Button>
        <Paper
          square
          elevation={0}
          sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
          {images
            .slice(activeStep, activeStep + (window.innerWidth > 600 ? 3 : 1))
            .map((image, index) => (
              <CarouselItem key={index} image={image} />
            ))}
        </Paper>
        <Button size="small" onClick={handleNext} color="secondary">
          <KeyboardArrowRight />
        </Button>
      </Box>
    </Box>
  );
}

export default Carousel;
