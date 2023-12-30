import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import hotel from "../../hotel.jpg";

function Content() {
  return (
    <Box
      sx={{
        width: { xs: "90%", md: "100%" },
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <img
        src={hotel}
        alt="hotel"
        style={{
          width: "100%",
          height: "500px",
          objectFit: "cover",
          position: "absolute",
          zIndex: "-1",
        }}
      />

      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",

          justifyContent: "center",
        }}>
        <Typography
          margin={{ xs: "90px 0 20px 0", md: "25% 0 20px 0" }}
          width={{ xs: "100%", md: "100%" }}
          display="flex"fontFamily="Jost"
          fontWeight={900}
          variant="h2"
          gutterBottom
          color="primary">
          Nombre del hotel
        </Typography>
        <Button fontFamily="Jost" variant="contained" color="primary" size="large">
          Hacer Reserva
        </Button>
      </Box>
    </Box>
  );
}

export default Content;
