import React, { useState } from "react";
import { Box, Typography, Button, Paper } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

const CarouselFrame = () => {
  const room = [
    {
      image: "/room/room1.jpg",
      lorem:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut dolor magnam aliquam numquam, quia accusamus eligendi dolorem enim! Consequuntur, corporis?",
      lorem2:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut dolor magnam aliquam numquam",
    },
    {
      image: "/room/room2.jpg",
      lorem:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut dolor magnam aliquam numquam, quia accusamus eligendi dolorem enim! Consequuntur, corporis?",
      lorem2:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut dolor magnam aliquam numquam",
    },
    {
      image: "/room/room3.avif",
      lorem:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut dolor magnam aliquam numquam, quia accusamus eligendi dolorem enim! Consequuntur, corporis?",
      lorem2:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut dolor magnam aliquam numquam",
    },
  ];

  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = room.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep === maxSteps - 1 ? 0 : prevActiveStep + 1
    );
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep === 0 ? maxSteps - 1 : prevActiveStep - 1
    );
  };

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        width={{ md: "100%", xs: "100%" }}
        margin="0 auto">
        <Button
          sx={{
            height: "50px",
            width: "20px",
            position: "absolute",
            left: {md:"300px", xs: "0"},
          }}
          size="small"
          onClick={handleBack}
          color="secondary">
          <KeyboardArrowLeft />
        </Button>
        <Paper
          square
          
          elevation={0}
          sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, width: "100%" }}>
          <MiddleFrame image={room[activeStep]} />
        </Paper>
        <Button
          sx={{ position: "absolute", right: {md:"300px", xs: "0"} }}
          size="small"
          onClick={handleNext}
          color="secondary">
          <KeyboardArrowRight />
        </Button>
      </Box>
    </>
  );
};

function MiddleFrame({ image }) {
  console.log(image);

  return (
    <Box
      sx={{
        backgroundColor: "#AE9672",
        width: { xs: "100%", md: "100%" },
        margin: "0 auto",
      }}>
        <Box
          margin="0 auto"
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          padding={4}
          alignItems="center"
          justifyContent="center">
          <img
            src={image.image}
            alt="room"
            width={400}
            style={{ objectFit: "contain", aspectRatio: "3/2", borderRadius: "12px" }}
          />

          <Box
            margin="20px 56px"
            padding={3}
            width={{ xs: "90%", sm: "90%", md: "30%" }}
            display="flex"
            flexDirection="column"
            justifyContent="space-between">
            <Typography
              variant="h3"
              fontFamily="Jost"
              fontWeight={700}
              fontSize={{ xs: 20, sm: 20 }}
              color="primary">
              Nombre de la habitacion
            </Typography>
            <Typography
              py={2}
              fontFamily="Jost"
              fontWeight="400"
              variant="h3"
              fontSize={{ xs: 16, sm: 18 }}
              color="primary">
              {image.lorem}
            </Typography>
            <Typography
              variant="h3"
              fontFamily="Jost"
              fontSize={{ xs: 16, sm: 18 }}
              color="primary">
              {image.lorem2}
            </Typography>
            <Button
              fontFamily="Jost"
              sx={{ marginTop: "20px" }}
              variant="contained">
              Hacer reservación
            </Button>
          </Box>
        </Box>
    </Box>
  );
}

export default CarouselFrame;
