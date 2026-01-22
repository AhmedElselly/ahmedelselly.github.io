import { Box, Typography, Grid } from "@mui/material";
import { testimonials } from "@/data/testimonials";
import TestimonialCard from "../TestimonialCard";

export default function TestimonialsSection() {
  return (
    <Box sx={{ py: 10 }}>
      <Box sx={{ maxWidth: 1100, mx: "auto", px: 2 }}>
        <Typography variant="h3" fontWeight={800}>
          Client reviews
        </Typography>

        <Typography sx={{ mt: 1 }} color="text.secondary" maxWidth={700}>
          Feedback from real projects. Each review links directly to the
          original Freelancer project for full context.
        </Typography>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          {testimonials.map((t) => (
            <Grid size={{ xs: 12, md: 6 }} key={t.id}>
              <TestimonialCard testimonial={t} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
