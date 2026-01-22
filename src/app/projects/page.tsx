import { Box, Typography, Grid } from "@mui/material";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects | Ahmed Elselly",
  description:
    "Selected projects showcasing real-world full-stack systems, mobile applications, and scalable platforms.",
};

export default function ProjectsPage() {
  return (
    <Box sx={{ bgcolor: "primary.main" }}>
      <Box sx={{ maxWidth: 1200, mx: "auto", px: 2, py: 8 }}>
        <Typography variant="h2" fontWeight={700}>
          Projects
        </Typography>

        <Typography sx={{ mt: 2 }} color="text.secondary" maxWidth={700}>
          A selection of real-world systems I’ve built, focusing on scalability,
          real-time behavior, and production-grade architecture.
        </Typography>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          {projects.map((project) => (
            <Grid size={{ xs: 12, md: 6 }} key={project.slug}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
