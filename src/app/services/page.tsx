import { Box, Typography, Grid, Paper, Stack, Button } from "@mui/material";
import Link from "next/link";

export const metadata = {
  title: "Services | Ahmed Elselly",
  description:
    "Full-stack development services including web applications, mobile apps, real-time systems, and scalable backend architecture.",
};

const services = [
  {
    title: "Full-Stack Web Applications",
    description:
      "Design and development of production-grade web platforms using modern stacks. From MVPs to scalable systems with clean architecture.",
    points: [
      "React / Next.js frontends",
      "Node.js / NestJS backends",
      "REST & GraphQL APIs",
      "Database design & performance",
      "Authentication & roles",
    ],
  },
  {
    title: "Mobile Applications",
    description:
      "Cross-platform mobile apps built for real business use, not demos. Focus on performance, reliability, and real-world constraints.",
    points: [
      "React Native & Expo",
      "Customer, business & rider apps",
      "Real-time updates",
      "Push notifications",
      "Hardware & system integrations",
    ],
  },
  {
    title: "Real-Time & Scalable Systems",
    description:
      "Systems that handle live data, state synchronization, and reliability at scale.",
    points: [
      "WebSockets & GraphQL subscriptions",
      "Dispatch & tracking systems",
      "Notification reliability layers",
      "Event-driven architecture",
      "Concurrency-safe design",
    ],
  },
  {
    title: "Backend Architecture & Integrations",
    description:
      "Designing the foundation your product runs on, with strong focus on long-term maintainability.",
    points: [
      "System architecture",
      "Microservices & modular monoliths",
      "Third-party API integrations",
      "Payments, maps, messaging, printers",
      "Security & performance",
    ],
  },
];

export default function ServicesPage() {
  return (
    <Box sx={{ bgcolor: "primary.main", py: { xs: 6, md: 10 } }}>
      <Box sx={{ maxWidth: 1200, mx: "auto", px: 2 }}>
        {/* Hero */}
        <Typography variant="h2" fontWeight={800}>
          Services
        </Typography>

        <Typography
          sx={{ mt: 2, fontSize: 18 }}
          color="text.secondary"
          maxWidth={750}
        >
          I help startups and businesses design and build production-grade web
          and mobile systems — from early MVPs to scalable platforms handling
          real users, real-time behavior, and complex integrations.
        </Typography>

        {/* Services grid */}
        <Grid container spacing={4} sx={{ mt: 6 }}>
          {services.map((service) => (
            <Grid size={{ xs: 12, md: 6 }} key={service.title}>
              <Paper sx={{ p: 4, height: "100%", borderRadius: 3 }}>
                <Typography variant="h5" fontWeight={700}>
                  {service.title}
                </Typography>

                <Typography color="text.secondary" sx={{ mt: 1 }}>
                  {service.description}
                </Typography>

                <ul style={{ marginTop: 16 }}>
                  {service.points.map((point) => (
                    <li key={point}>
                      <Typography>{point}</Typography>
                    </li>
                  ))}
                </ul>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Process */}
        <Paper sx={{ mt: 10, p: { xs: 3, md: 5 }, borderRadius: 4 }}>
          <Typography variant="h4" fontWeight={800}>
            How I work
          </Typography>

          <Grid container spacing={3} sx={{ mt: 2 }}>
            <Grid size={{ xs: 12, md: 3 }}>
              <Typography fontWeight={700}>1. Understand</Typography>
              <Typography color="text.secondary">
                Deeply understanding your product goals, users, and constraints.
              </Typography>
            </Grid>

            <Grid size={{ xs: 12, md: 3 }}>
              <Typography fontWeight={700}>2. Architect</Typography>
              <Typography color="text.secondary">
                Designing a system that scales technically and business-wise.
              </Typography>
            </Grid>

            <Grid size={{ xs: 12, md: 3 }}>
              <Typography fontWeight={700}>3. Build</Typography>
              <Typography color="text.secondary">
                Clean, tested, production-focused development.
              </Typography>
            </Grid>

            <Grid size={{ xs: 12, md: 3 }}>
              <Typography fontWeight={700}>4. Support</Typography>
              <Typography color="text.secondary">
                Iteration, optimization, and long-term maintainability.
              </Typography>
            </Grid>
          </Grid>
        </Paper>

        {/* CTA */}
        <Stack
          spacing={2}
          sx={{ mt: 10, textAlign: "center", alignItems: "center" }}
        >
          <Typography variant="h4" fontWeight={800}>
            Have a project in mind?
          </Typography>

          <Typography color="text.secondary" maxWidth={600}>
            If you are building a product, platform, or system and need someone
            who can own the stack end-to-end, let’s talk.
          </Typography>

          <Link
            href="/contact"
            style={{ textDecoration: "none", width: "100%", marginTop: 30 }}
          >
            <Button
              variant="contained"
              size="large"
              sx={{ width: "100%", bgcolor: "secondary.main" }}
            >
              Contact Me
            </Button>
          </Link>
        </Stack>
      </Box>
    </Box>
  );
}
