"use client";

import { Box, Typography, Stack, Button } from "@mui/material";
import Link from "next/link";
import HeroParticles from "../HeroParticles";

export default function HeaderSection() {
  return (
    <Box
      id="hero"
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 10, md: 16 },
        bgcolor: "primary.main",
        color: "common.white",
      }}
    >
      {/* Particles background */}
      <HeroParticles />

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1100,
          mx: "auto",
          px: 2,
        }}
      >
        <Typography
          variant="h2"
          fontWeight={900}
          sx={{
            maxWidth: 900,
            fontSize: {
              xs: "2.1rem", // mobile
              sm: "2.6rem", // small tablets
              md: "3.4rem", // laptops
              lg: "3.8rem", // desktop
            },
            lineHeight: {
              xs: 1.25,
              md: 1.15,
            },
          }}
        >
          Full-stack engineer building real-world platforms and scalable systems
        </Typography>

        <Typography sx={{ mt: 3, fontSize: 19, maxWidth: 750, opacity: 0.9 }}>
          I design and build production-grade web and mobile applications with a
          strong focus on system architecture, real-time behavior, and long-term
          maintainability.
        </Typography>

        <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
          <Link href="/projects" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: "#fff",
                color: "primary.main",
                "&:hover": {
                  bgcolor: "primary.main",
                  color: "#fff",
                },
              }}
            >
              View Projects
            </Button>
          </Link>

          <Link href="/services" style={{ textDecoration: "none" }}>
            <Button
              variant="outlined"
              size="large"
              sx={{
                color: "common.white",
                borderColor: "common.white",
                "&:hover": {
                  borderColor: "common.white",
                  backgroundColor: "rgba(255,255,255,0.08)",
                },
              }}
            >
              View services
            </Button>
          </Link>
        </Stack>
      </Box>
    </Box>
  );
}
