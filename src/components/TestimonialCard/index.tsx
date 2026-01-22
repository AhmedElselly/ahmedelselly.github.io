import { Paper, Typography, Stack, Button, Rating } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Testimonial } from "@/data/testimonials";

export default function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  return (
    <Paper sx={{ p: 4, borderRadius: 3, height: "100%" }}>
      <Rating name="read-only" value={testimonial.rating} readOnly />
      <Typography sx={{ fontSize: 17, fontStyle: "italic" }}>
        “{testimonial.text}”
      </Typography>

      <Stack spacing={0.5} sx={{ mt: 2 }}>
        <Typography fontWeight={700}>{testimonial.client}</Typography>
        <Typography color="text.secondary">
          {testimonial.projectType} · via {testimonial.platform}
        </Typography>
      </Stack>

      <Button
        href={testimonial.projectUrl}
        target="_blank"
        rel="noopener noreferrer"
        endIcon={<OpenInNewIcon />}
        sx={{ mt: 2, px: 0, color: "#fff" }}
      >
        View project on Freelancer
      </Button>
    </Paper>
  );
}
