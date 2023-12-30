import React from "react";
import { Box, Typography } from "@mui/material";

const events = [
  {
    image: "/events/winenight.webp",
    name: "Wine Night",
  },
  {
    image: "/events/concert.jpg",
    name: "Concerts",
  },
  {
    image: "/events/nightfair.webp",
    name: "Night Fair",
  },
];

function Events() {
  return (
    <Box width="80%" margin="100px auto">
      <Typography fontFamily="Jost" variant="h5" component="h3">
        Eventos
      </Typography>

      <Box
        width="80%"
        display={{ xs: "block", md: "flex" }}
        justifyContent={{ md: "space-around" }}
        margin="20px auto">
        {events.map((item, index) => (
          <Box
            key={index}
            position="relative"
            display="flex"
            justifyContent="center">
            <img
              style={{
                objectFit: "cover",
                filter: "brightness(50%)",
                borderRadius: "10px",
                margin: "20px auto",
              }}
              src={item.image}
              width={210}
              height={337}
            />
            <Typography
              fontFamily="Jost"
              top="50%"
              display="flex"
              margin="0 auto"
              width="100%"
              justifyContent="center"
              color="primary"
              fontWeight="700"
              position="absolute">
              {" "}
              {item.name}
            </Typography>
            <Typography
              fontFamily="Jost"
              top="50%"
              display="flex"
              margin="0 auto"
              width="100%"
              justifyContent="center"
              color="primary"
              mt={15}
              fontWeight="500"
              position="absolute">
              Fecha - Hora
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Events;
