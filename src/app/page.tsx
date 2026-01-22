import {
  Box,
  Typography,
  Stack,
  Button,
  Grid,
  Paper,
  Chip,
} from "@mui/material";
import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import TestimonialsSection from "@/components/TestimonialsSection";

export const metadata = {
  title: "Ahmed Elselly | Full-Stack Engineer",
  description:
    "Full-stack engineer specializing in React, React Native, and Node.js. I build scalable platforms, real-time systems, and production-grade applications.",
};

export default function Home() {
  return (
    <Box sx={{ bgcolor: "primary.main" }}>
      {/* ================= HERO ================= */}
      <Box sx={{ py: { xs: 8, md: 14 } }}>
        <Box sx={{ maxWidth: 1100, mx: "auto", px: 2 }}>
          <Typography
            variant="h2"
            fontWeight={900}
            sx={{ maxWidth: 900, lineHeight: 1.1 }}
          >
            Full-stack engineer building real-world platforms and scalable
            systems
          </Typography>

          <Typography
            sx={{ mt: 3, fontSize: 19, maxWidth: 750 }}
            color="text.secondary"
          >
            I design and build production-grade web and mobile applications with
            a strong focus on system architecture, real-time behavior, and
            long-term maintainability. My work includes multi-app ecosystems,
            dispatch platforms, and complex integrations used in real
            environments.
          </Typography>

          <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
            <Link href="/projects" style={{ textDecoration: "none" }}>
              <Button variant="contained" size="large">
                View Projects
              </Button>
            </Link>

            <Link href="/contact" style={{ textDecoration: "none" }}>
              <Button variant="outlined" size="large" sx={{ color: "#fff" }}>
                Contact Me
              </Button>
            </Link>
          </Stack>
        </Box>
      </Box>

      {/* ================= FOCUS ================= */}
      <Box sx={{ py: 10, bgcolor: "background.paper" }}>
        <Box sx={{ maxWidth: 1100, mx: "auto", px: 2 }}>
          <Typography variant="h3" fontWeight={800}>
            What I build
          </Typography>

          <Typography sx={{ mt: 2 }} color="text.secondary" maxWidth={700}>
            My work focuses on building systems that need to work reliably under
            real-world conditions — not just look good.
          </Typography>

          <Stack direction="row" flexWrap="wrap" sx={{ mt: 3, gap: 1 }}>
            {[
              "Scalable system design",
              "Multi-app ecosystems",
              "Real-time platforms",
              "Mobile & web applications",
              "GraphQL & API architecture",
              "Geolocation systems",
              "Notification infrastructure",
              "Hardware & external integrations",
            ].map((item) => (
              <Box sx={{ mt: 2 }}>
                <Chip key={item} label={item} />
              </Box>
            ))}
          </Stack>
        </Box>
      </Box>

      {/* ================= HIGHLIGHTS ================= */}
      <Box sx={{ bgcolor: "background.paper", pb: 8, pt: 0 }}>
        <Box sx={{ maxWidth: 1100, mx: "auto", px: 2 }}>
          <Grid container spacing={3}>
            {[
              {
                title: "Production systems",
                text: "Platforms built for real users, not demos or toy projects.",
              },
              {
                title: "Real-time architecture",
                text: "Dispatch flows, subscriptions, notifications, and live tracking.",
              },
              {
                title: "End-to-end ownership",
                text: "From frontend UX to backend architecture and integrations.",
              },
              {
                title: "Complex integrations",
                text: "Maps, payments, notifications, hardware, and third-party APIs.",
              },
            ].map((item) => (
              <Grid size={{ xs: 12, md: 3 }} key={item.title}>
                <Paper sx={{ p: 3, height: "100%", borderRadius: 3 }}>
                  <Typography fontWeight={800}>{item.title}</Typography>
                  <Typography color="text.secondary" sx={{ mt: 1 }}>
                    {item.text}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      <TestimonialsSection />

      {/* ================= PROJECTS ================= */}
      <Box sx={{ bgcolor: "background.paper", py: 10 }}>
        <Box sx={{ maxWidth: 1100, mx: "auto", px: 2 }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h3" fontWeight={800}>
              Featured projects
            </Typography>

            <Link href="/projects" style={{ textDecoration: "none" }}>
              <Button variant="text" sx={{ color: "#fff" }}>
                View all projects →
              </Button>
            </Link>
          </Stack>

          <Grid container spacing={4} sx={{ mt: 3 }}>
            {projects.slice(0, 2).map((project) => (
              <Grid size={{ xs: 12, md: 6 }} key={project.slug}>
                <ProjectCard project={project} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* ================= CTA ================= */}
      <Box sx={{ py: 12 }}>
        <Box sx={{ maxWidth: 900, mx: "auto", px: 2, textAlign: "center" }}>
          <Typography variant="h3" fontWeight={900}>
            Have a product to build?
          </Typography>

          <Typography sx={{ mt: 2 }} color="text.secondary">
            If you’re working on a serious product and need someone who can own
            the technical side end-to-end, I’m open to discussing new
            opportunities.
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            alignItems="center"
            sx={{ mt: 4 }}
          >
            <Link href="/contact" style={{ textDecoration: "none" }}>
              <Button variant="contained" size="large">
                Start a conversation
              </Button>
            </Link>

            <Link href="/services" style={{ textDecoration: "none" }}>
              <Button variant="outlined" size="large" sx={{ color: "#fff" }}>
                View services
              </Button>
            </Link>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
