import React from "react";
import { Box, Button, Typography } from "@mui/material";

function Rating() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      width={{ md: "20%", xs: "80%" }}
      justifyContent="center"
      margin="100px auto">
      <Typography
        margin="50px auto"
        color="#ae9672"
        fontWeight={800}
        textAlign="center"
        fontSize="28px">
        {" "}
        Clasifica tu experiencia
      </Typography>
      <Button variant="contained" color="secondary">
        Clasificar
      </Button>
    </Box>
  );
}

export default Rating;
