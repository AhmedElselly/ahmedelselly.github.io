import {
  Box,
  Typography,
  Paper,
  Stack,
  TextField,
  Button,
  Grid,
  Divider,
  Link as MuiLink,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
import DescriptionIcon from "@mui/icons-material/Description";

export const metadata = {
  title: "Contact | Ahmed Elselly",
  description:
    "Get in touch with Ahmed Elselly to discuss full-stack development projects, collaborations, or job opportunities.",
};

export default function ContactPage() {
  return (
    <Box sx={{ bgcolor: "primary.main", py: { xs: 6, md: 10 } }}>
      <Box sx={{ maxWidth: 1000, mx: "auto", px: 2 }}>
        {/* Header */}
        <Typography variant="h2" fontWeight={800}>
          Contact
        </Typography>

        <Typography
          sx={{ mt: 2, fontSize: 18 }}
          color="text.secondary"
          maxWidth={700}
        >
          If you’re building a product, platform, or system and are looking for
          a full-stack engineer who can own the stack end-to-end, I’d be glad to
          hear about it.
        </Typography>

        <Grid container spacing={4} sx={{ mt: 6 }}>
          {/* Info */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Paper sx={{ p: 4, borderRadius: 3, height: "100%" }}>
              <Typography variant="h5" fontWeight={700}>
                Let’s talk
              </Typography>

              <Typography sx={{ mt: 2 }} color="text.secondary">
                You can reach out for:
              </Typography>

              <Stack spacing={1.5} sx={{ mt: 2 }}>
                <Typography>• Full-time or contract roles</Typography>
                <Typography>• Freelance projects</Typography>
                <Typography>• Startup or product collaborations</Typography>
                <Typography>• System design or architecture support</Typography>
              </Stack>

              <Divider sx={{ my: 3 }} />

              <Stack spacing={1}>
                <Box sx={{ mb: 2 }}>
                  <Typography fontWeight={600}>Email:</Typography>
                  <MuiLink
                    href="mailto:ahmed.elselly@email.com"
                    color="inherit"
                    underline="hover"
                  >
                    ahmed.elselly@email.com
                  </MuiLink>
                </Box>
                <Box sx={{ mb: 2 }}>
                  <Typography fontWeight={600} sx={{ mb: 1 }}>
                    Phone & Whatsapp:
                  </Typography>
                  <MuiLink
                    href="https://wa.me/201150382550"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ display: "flex", alignItems: "center", gap: 0.8 }}
                    underline="hover"
                  >
                    <WhatsAppIcon color="success" />
                    <Typography color="text.secondary">
                      +20 11 5038 2550
                    </Typography>
                  </MuiLink>
                </Box>

                <Box>
                  <Typography fontWeight={600} sx={{ mb: 1 }}>
                    GitHub
                  </Typography>
                  <MuiLink
                    href="https://github.com/ahmedelselly"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ display: "flex", alignItems: "center", gap: 0.8 }}
                    underline="hover"
                  >
                    <GitHubIcon color="success" />
                    <Typography color="text.secondary">
                      github.com/ahmedelselly
                    </Typography>
                  </MuiLink>
                </Box>

                <Box sx={{ mt: 3 }}>
                  <Typography fontWeight={600} sx={{ mb: 1 }}>
                    Resume
                  </Typography>
                  <MuiLink
                    href="/cv/Ahmed_Elselly_Jan_2026.pdf"
                    target="_blank"
                    underline="hover"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.8,
                      color: "#fff",
                    }}
                  >
                    <DescriptionIcon />
                    <Typography color="text.secondary">
                      Download CV (PDF)
                    </Typography>
                  </MuiLink>
                </Box>

                <Typography fontWeight={600} sx={{ mt: 3 }}>
                  Location
                </Typography>
                <Typography color="text.secondary">
                  Egypt · Remote friendly
                </Typography>
              </Stack>
            </Paper>
          </Grid>

          {/* Form */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Paper sx={{ p: 4, borderRadius: 3 }}>
              <Typography variant="h5" fontWeight={700}>
                Send a message
              </Typography>

              <Stack spacing={2} sx={{ mt: 3 }}>
                <TextField label="Name" fullWidth />
                <TextField label="Email" fullWidth />
                <TextField label="Subject" fullWidth />
                <TextField label="Message" fullWidth multiline rows={4} />

                <Button variant="contained" size="large">
                  Send message
                </Button>

                <Typography variant="body2" color="text.secondary">
                  This form is for initial contact. Project details, timelines,
                  and technical discussions can follow.
                </Typography>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
