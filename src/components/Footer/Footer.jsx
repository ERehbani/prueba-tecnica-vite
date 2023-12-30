import React from "react";
import { Box, Typography } from "@mui/material";
import linkedin from "../../assets/linkedin.svg";
import xtwitter from "../../assets/logo-x-twitter.svg";

function Footer() {
  return (
    <footer>
      <Box width="100%" height="100px">
        <Box
        
          padding={{ md: 15, xs: 5 }}
          margin="0 auto"
          display={{ xs: "block", md: "flex" }}
          flexDirection={{ xs: "row", md: "column" }}
          justifyContent="space-around"
          alignItems="center"
          sx={{ backgroundColor: "#ae9672" }}>
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            justifyContent="space-around"
            alignItems="center"
            width="100%">
            <Typography
              height={200}fontFamily="Jost"
              display="flex"
              alignItems="center"
              margin="0 50px"
              variant="h3"
              fontSize="30px"
              color="primary">
              LOGO
            </Typography>
            <Box
              width={{ md: "2px", xs: "100%" }}
              height={{ md: "200px", xs: "2px" }}
              sx={{ backgroundColor: "#ffffff" }}></Box>
            <Box
              width={{ xs: "100%", md: "30%" }}
              margin={{ md: "auto 0", xs: "20px auto" }}>
              <Typography fontFamily="Jost" color="primary" margin="40px 0">
                About us
              </Typography>
              <Typography fontFamily="Jost" color="primary">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
                sed, quia cupiditate consectetur neque ducimus. Corporis eos
                repellendus, alias sit numquam ipsa, dolorum iure voluptatum,
                nihil ratione minus eius quod.
              </Typography>
            </Box>
            <Box margin={{ md: "auto 0", xs: "20px auto" }}>
              <Typography fontFamily="Jost" color="primary" fontSize="20px">
                Quick Links
              </Typography>
              <Box component="ul">
                <Typography fontFamily="Jost" color="primary" fontSize="14px">
                  Quick Links
                </Typography>
                <Typography fontFamily="Jost" color="primary" fontSize="14px">
                  Quick Links
                </Typography>
                <Typography fontFamily="Jost" color="primary" fontSize="14px">
                  Quick Links
                </Typography>
              </Box>
            </Box>
            <Box>
              <Box margin={{ md: "auto 0", xs: "40px auto" }} display="flex" justifyContent="space-between">
                <img src={xtwitter} alt="linkedin" width={40} />
                <img src={linkedin} alt="linkedin" width={40} />
              </Box>
              <Typography fontFamily="Jost" color="primary" fontWeight={800} fontSize={20}>
                asd@asd.asd
              </Typography>
            </Box>
          </Box>
          <Box
            margin={{ md: "20px 0", xs: "50px auto" }}
            marginTop={8}
            width={{ xs: "100%", md: "70%" }}
            display={{ md: "flex", xs: "block" }}
            textAlign="center"
            justifyContent="space-between">
            <Typography fontFamily="Jost"
              color="primary"
              fontWeight={900}
              fontSize={20}
              marginTop={2}>
              2023 Nombre. All right reserved
            </Typography>
            <Typography fontFamily="Jost" fontSize={20} marginTop={2} color="primary">
              Terminos y condiciones
            </Typography>
            <Typography fontFamily="Jost" fontSize={20} marginTop={2} color="primary">
              Politicas y privacidad
            </Typography>
            <Typography fontFamily="Jost" fontSize={20} marginTop={2} color="primary">
              Seguridad
            </Typography>
          </Box>
        </Box>
      </Box>
    </footer>
  );
}

export default Footer;
