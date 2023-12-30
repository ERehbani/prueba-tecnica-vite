import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Carousel from "./Carousel";
import plates from "./Plates";

function Recomendations() {
  console.log(plates);
  return (
    <Box mt={20} 
    width={{xs: "100%", md: "100%"}}>
      <Typography
      fontFamily="Jost"
        margin={{ xs: "50px auto" }}
        width={{ xs: "90%" }}
        display="flex"
        justifyContent="center"
        variant="h4"
        fontSize={{ xs: "25px" }}
        >
        Tus recomendaciones
      </Typography>
      <Box
        sx={{
          width: { sm: "60%", xs: "90%" },
          margin: { md: "0 auto", xs: "0 auto" }
        }}>
        {plates.map((item, index) => (
          <div key={index}>
            <Typography variant="h5" fontFamily="Jost">{item.category}</Typography>
            <Carousel images={item.images} />
          </div>
        ))}
      </Box>
    </Box>
  );
}

export default Recomendations;
