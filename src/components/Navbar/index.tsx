"use client";

import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "background.paper",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ height: 72 }}>
          {/* Logo / Name */}
          <Typography
            variant="h6"
            component={Link}
            href="/"
            sx={{
              color: "text.primary",
              textDecoration: "none",
              fontWeight: 700,
              flexGrow: 1,
            }}
          >
            Ahmed Elselly
          </Typography>

          {/* Desktop menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={Link}
                href={item.href}
                color="inherit"
              >
                {item.label}
              </Button>
            ))}
            <Button
              component={Link}
              href="/contact"
              variant="contained"
              color="primary"
            >
              Hire Me
            </Button>
          </Box>

          {/* Mobile menu icon */}
          <IconButton
            sx={{ display: { md: "none" } }}
            onClick={() => setOpen(!open)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>

        {/* Mobile menu */}
        {open && (
          <Box
            sx={{
              display: { md: "none" },
              pb: 2,
              borderTop: "1px solid",
              borderColor: "divider",
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={Link}
                href={item.href}
                fullWidth
                sx={{ justifyContent: "flex-start", py: 1.2, color: "#fff" }}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Button>
            ))}
            <Button
              component={Link}
              href="/contact"
              variant="contained"
              fullWidth
              sx={{ mt: 1 }}
              onClick={() => setOpen(false)}
            >
              Hire Me
            </Button>
          </Box>
        )}
      </Container>
    </AppBar>
  );
}
