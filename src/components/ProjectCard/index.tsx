"use client";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Stack,
  Button,
} from "@mui/material";
import Link from "next/link";
import { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 3,
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={project.image}
        alt={project.title}
      />

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" fontWeight={700}>
          {project.title}
        </Typography>

        <Typography color="text.secondary" sx={{ mt: 1 }}>
          {project.subtitle}
        </Typography>

        <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mt: 2 }}>
          {project.tech.slice(0, 4).map((tech) => (
            <Chip key={tech} label={tech} size="small" />
          ))}
        </Stack>

        <Typography sx={{ mt: 2 }}>{project.description}</Typography>
      </CardContent>

      <Stack direction="row" spacing={2} sx={{ p: 2 }}>
        <Button
          component={Link}
          href={`/projects/${project.slug}`}
          variant="contained"
          fullWidth
          sx={{ background: "#fff", color: "primary.main" }}
        >
          View Case Study
        </Button>
      </Stack>
    </Card>
  );
}
