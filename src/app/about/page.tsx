import {
  Box,
  Typography,
  Stack,
  Grid,
  Paper,
  Chip,
  Button,
} from "@mui/material";
import Link from "next/link";

export const metadata = {
  title: "About | Ahmed Elselly",
  description:
    "About Ahmed Elselly, a full-stack engineer specializing in React, React Native, Node.js, and scalable real-world systems.",
};

const coreStack = [
  "React / Next.js",
  "React Native / Expo",
  "Node.js / NestJS",
  "GraphQL & REST APIs",
  "MongoDB & MySQL",
  "Firebase & real-time systems",
  "System architecture",
  "ESC/POS & hardware integrations",
];

export default function AboutPage() {
  return (
    <Box sx={{ bgcolor: "background.default" }}>
      <Paper
        sx={{ bgcolor: "primary.main", py: { xs: 6, md: 10 }, borderRadius: 0 }}
      >
        <Box sx={{ maxWidth: 1000, mx: "auto", px: 2 }}>
          {/* Intro */}
          <Typography variant="h2" fontWeight={800}>
            About me
          </Typography>

          <Typography
            sx={{ mt: 3, fontSize: 18 }}
            color="text.secondary"
            maxWidth={800}
          >
            I’m a full-stack engineer focused on building production-grade web
            and mobile systems. My work centers on scalable architecture,
            real-time platforms, and solving complex product and engineering
            problems.
          </Typography>

          {/* Story */}
          <Paper sx={{ mt: 6, p: { xs: 3, md: 5 }, borderRadius: 4 }}>
            <Stack spacing={3}>
              <Typography>
                Over the past years, I’ve worked across the full stack building
                delivery platforms, multi-role systems, real-time dispatch
                flows, and business dashboards. I specialize in turning product
                ideas into reliable, scalable systems used by real users.
              </Typography>

              <Typography>
                Much of my work has involved designing architectures that
                support multiple applications (customer, business, rider),
                real-time order lifecycles, geolocation-based features, and
                notification systems that must work under real-world
                constraints.
              </Typography>

              <Typography>
                I care deeply about code quality, long-term maintainability, and
                building systems that teams can confidently extend. In previous
                roles, I’ve also mentored junior developers and supported teams
                in solving complex frontend and backend challenges.
              </Typography>
            </Stack>
          </Paper>

          {/* Focus */}
          <Grid container spacing={4} sx={{ mt: 8 }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h4" fontWeight={800}>
                Engineering focus
              </Typography>
              <Stack spacing={2} sx={{ mt: 2 }}>
                <Typography>• Scalable system design</Typography>
                <Typography>• Real-time platforms and data flows</Typography>
                <Typography>• Mobile-first product ecosystems</Typography>
                <Typography>• API and backend architecture</Typography>
                <Typography>
                  • Performance, reliability, and maintainability
                </Typography>
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h4" fontWeight={800}>
                What I bring to a team
              </Typography>
              <Stack spacing={2} sx={{ mt: 2 }}>
                <Typography>• End-to-end ownership</Typography>
                <Typography>• Clear communication</Typography>
                <Typography>• Strong debugging and problem solving</Typography>
                <Typography>• Architecture-first thinking</Typography>
                <Typography>• Support and mentorship</Typography>
              </Stack>
            </Grid>
          </Grid>

          {/* Stack */}
          <Paper sx={{ mt: 8, p: { xs: 3, md: 5 }, borderRadius: 4 }}>
            <Typography variant="h4" fontWeight={800}>
              Core stack
            </Typography>

            <Stack direction="row" flexWrap="wrap" sx={{ mt: 2, gap: 1 }}>
              {coreStack.map((tech) => (
                <Chip key={tech} label={tech} />
              ))}
            </Stack>
          </Paper>

          {/* CTA */}
          <Stack
            spacing={2}
            sx={{ mt: 10, textAlign: "center", alignItems: "center" }}
          >
            <Typography variant="h4" fontWeight={800}>
              Let’s build something meaningful
            </Typography>

            <Typography color="text.secondary" maxWidth={600}>
              Whether you are building a startup product or looking for a
              full-stack engineer to join your team, I’m always open to
              discussing new opportunities.
            </Typography>

            <Link href="/contact" style={{ textDecoration: "none" }}>
              <Button variant="contained" size="large">
                Contact Me
              </Button>
            </Link>
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
}
