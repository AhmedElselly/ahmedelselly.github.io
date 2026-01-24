import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { Box, Typography, Stack, Chip, Divider, Paper } from "@mui/material";
import { AndroidAppsSection } from "@/components/ProjectsComponents/AndroidAppsSection";

type Props = {
  params: { slug: string };
};

async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  console.log({ slug });

  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <Box bgcolor={"primary.main"} sx={{ height: "100%", marginBottom: 0 }}>
      <Box
        sx={{
          maxWidth: 900,
          mx: "auto",
          px: { xs: 5, md: 2 },
          py: 8,
        }}
      >
        <Paper sx={{ p: { xs: 3, md: 5 }, borderRadius: 4 }}>
          <Typography variant="h3" fontWeight={700}>
            {project?.title}
          </Typography>

          <Typography color="text.secondary" sx={{ mt: 1 }}>
            {project?.subtitle}
          </Typography>

          <Box
            component="img"
            src={project?.image}
            alt={project?.title}
            sx={{ width: "100%", borderRadius: 3, mt: 4 }}
          />

          {project?.linksAndroid ? (
            <AndroidAppsSection links={project?.linksAndroid.links} />
          ) : null}

          <Stack spacing={4} sx={{ mt: 6 }}>
            <section>
              <Typography variant="h5" fontWeight={600}>
                The problem
              </Typography>
              <Typography sx={{ mt: 1 }}>{project?.problem}</Typography>
            </section>

            <Divider sx={{ my: 6 }} />

            <section>
              <Typography variant="h5" fontWeight={600}>
                The solution
              </Typography>
              <Typography sx={{ mt: 1 }}>{project?.solution}</Typography>
            </section>

            <Divider sx={{ my: 6 }} />

            <section>
              <Typography variant="h5" fontWeight={700}>
                Role & Responsibilities
              </Typography>
              <Typography sx={{ mt: 1 }}>{project.role}</Typography>
            </section>

            <Divider sx={{ my: 6 }} />

            <section>
              <Typography variant="h5" fontWeight={700} sx={{ mt: 4 }}>
                System Architecture
              </Typography>
              <ul>
                {project.architecture.map((item) => (
                  <li key={item}>
                    <Typography>{item}</Typography>
                  </li>
                ))}
              </ul>
            </section>

            <Divider sx={{ my: 6 }} />

            <section>
              <Typography variant="h5" fontWeight={700}>
                Technical Challenges
              </Typography>
              <ul>
                {project.challenges.map((item) => (
                  <li key={item}>
                    <Typography>{item}</Typography>
                  </li>
                ))}
              </ul>
            </section>

            <Divider sx={{ my: 6 }} />

            {project.ecommerceProblems?.length && (
              <section>
                <Typography variant="h5" fontWeight={700}>
                  E-commerce problems solved
                </Typography>

                <ul>
                  {project.ecommerceProblems.map((item) => (
                    <li key={item}>
                      <Typography>{item}</Typography>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <Divider sx={{ my: 6 }} />

            {project.thermalPrinting && (
              <section>
                <Typography variant="h5" fontWeight={700}>
                  Thermal printing & hardware integration
                </Typography>

                <Typography sx={{ my: 1 }}>
                  {project.thermalPrinting.problem}
                </Typography>

                <ul>
                  {project.thermalPrinting.solution.map((item) => (
                    <li key={item}>
                      <Typography>{item}</Typography>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <Divider sx={{ my: 6 }} />
            <section>
              <Typography variant="h5" fontWeight={700} sx={{ mt: 4 }}>
                Key Features
              </Typography>
              <Stack direction="row" flexWrap="wrap" sx={{ mt: 1, gap: 1 }}>
                {project.features.map((item) => (
                  <Chip key={item} label={item} />
                ))}
              </Stack>
            </section>

            <section>
              <Typography variant="h5" fontWeight={600}>
                Impact
              </Typography>
              <ul>
                {project?.impact.map((item) => (
                  <li key={item}>
                    <Typography>{item}</Typography>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <Typography variant="h5" fontWeight={600}>
                Tech stack
              </Typography>
              <Stack direction="row" flexWrap="wrap" sx={{ mt: 1, gap: 1 }}>
                {project?.tech.map((tech) => (
                  <Chip key={tech} label={tech} />
                ))}
              </Stack>
            </section>
          </Stack>
        </Paper>
      </Box>
    </Box>
  );
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default ProjectPage;
