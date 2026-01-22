"use client";

import {
  Box,
  Container,
  Typography,
  Stack,
  Link as MuiLink,
} from "@mui/material";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DescriptionIcon from "@mui/icons-material/Description";
import { IconButton, Button } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        // mt: 12,
        py: 6,
        borderTop: "1px solid",
        borderColor: "divider",
        bgcolor: "background.paper",
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3}>
          <Typography variant="h6" fontWeight={700}>
            Ahmed Elselly
          </Typography>

          <Typography color="text.secondary" maxWidth={520}>
            Full-stack engineer specializing in React, React Native, and
            Node.js. I build scalable platforms, real-time systems, and
            production-grade applications for startups and businesses.
          </Typography>

          <Stack direction="row" spacing={3} flexWrap="wrap">
            <MuiLink component={Link} sx={{ color: "#fff" }} href="/projects">
              Projects
            </MuiLink>
            <MuiLink component={Link} sx={{ color: "#fff" }} href="/services">
              Services
            </MuiLink>
            <MuiLink component={Link} sx={{ color: "#fff" }} href="/about">
              About
            </MuiLink>
            <MuiLink component={Link} sx={{ color: "#fff" }} href="/contact">
              Contact
            </MuiLink>
            {/* Later: GitHub, LinkedIn */}
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <IconButton
              component="a"
              href="https://github.com/ahmedelselly"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </IconButton>

            <IconButton
              component="a"
              href="https://www.linkedin.com/in/ahmed-elselly-52247417a"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </IconButton>

            <Button
              component="a"
              href="/cv/Ahmed_Elselly_Jan_2026.pdf"
              target="_blank"
              startIcon={<DescriptionIcon />}
              sx={{ ml: 1, color: "#fff" }}
            >
              Download CV
            </Button>
          </Stack>

          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Ahmed Elselly. All rights reserved.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
