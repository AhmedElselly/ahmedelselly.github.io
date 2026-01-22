"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark", // we can add dark mode later
    primary: {
      main: "#0F172A", // deep professional slate
    },
    secondary: {
      main: "#2563EB", // modern blue accent
    },
    background: {
      default: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "Inter, system-ui, Arial, sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: "3rem",
    },
    h2: {
      fontWeight: 600,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 10,
  },
});

export default theme;
