import React, { useEffect, useState } from "react";
import Content from "./Content";
import PropTypes from "prop-types";
import {
  Box,
  Toolbar,
  Drawer,
  IconButton,
  Button,
  Typography,
  useScrollTrigger,
  Slide,
} from "@mui/material";
import {
  Home,
  Event,
  MiscellaneousServices,
  Widgets,
  Menu,
} from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";
import NavListDrawer from "./NavListDrawer";

const navLinks = [
  {
    title: "Home",
    path: "#",
    icon: <Home />,
  },
  {
    title: "Menu",
    path: "#",
    icon: <Widgets />,
  },
  {
    title: "Eventos",
    path: "#",
    icon: <Event />,
  },
  {
    title: "Servicios",
    path: "#",
    icon: <MiscellaneousServices />,
  },
];

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

function Navbar(props) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      console.log(window.scrollY)
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box>
      <HideOnScroll {...props}>
        <Box
          component="div"
          // color={scrolled ? "secondary" : "transparent"}
          sx={{
            backgroundColor: scrolled ? "#808080" : "transparent",
            transition: "background-color 1s ease-in-out",
            zIndex: "2"
          }}
          position="fixed"
          display="flex"
          justifyContent="space-around"
          width="100%">
          <Toolbar sx={{ width: "100%" }}>
            <IconButton
              color="inherit"
              size="large"
              onClick={() => setOpen(true)}
              sx={{ display: { xs: "flex", sm: "none" } }}
              edge="start">
              <Menu />
            </IconButton>
            <Typography
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
              variant="h6"
              fontWeight="900"
              color="white"
              fontFamily="Jost">
              Logo
            </Typography>
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                justifyContent: "center",
                width: "100%",
              }}>
              {navLinks.map((item, index) => (
                <Button key={index} href={item.path}>
                  <Typography fontWeight={700}>{item.title}</Typography>
                </Button>
              ))}
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}>
              <Button variant="contained" color="inherit">
                <PersonIcon color="secondary" />
              </Button>
            </Box>
          </Toolbar>
        </Box>
      </HideOnScroll>

      <Drawer
        sx={{ display: { xs: "block", sm: "none" } }}
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}>
        <NavListDrawer navLinks={navLinks} />
      </Drawer>
      <Content />
    </Box>
  );
}

export default Navbar;
