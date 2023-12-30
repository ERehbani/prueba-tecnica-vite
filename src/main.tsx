import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider, createTheme } from "@mui/material";
import Navbar from "./components/Navbar/Navbar.jsx";
import "./index.css";

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#fff',
      dark: '#002884',
      contrastText: '#b8a383',
    },
    secondary: {
      main: '#000000',
      dark: '#000000',
      contrastText: '#b8a383',
    },
  },
})

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Navbar />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
