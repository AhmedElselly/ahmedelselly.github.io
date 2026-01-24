import { Box, Typography, Stack, Button, Paper } from "@mui/material";
import AndroidIcon from "@mui/icons-material/Android";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { AndroidLinksProps } from "@/data/projects";

export function AndroidAppsSection({ links }: AndroidLinksProps) {
  console.log({ links });
  if (!links) return null;

  return (
    <Box sx={{ mt: 8 }}>
      <Typography variant="h4" fontWeight={800}>
        Live Android applications
      </Typography>

      <Typography color="text.secondary" sx={{ mt: 1, maxWidth: 700 }}>
        This platform runs as a real multi-application ecosystem. Each app is
        live on Google Play and built for a specific role.
      </Typography>

      <Stack direction={{ xs: "column", sm: "row" }} spacing={3} sx={{ mt: 4 }}>
        {links.customerApp && (
          <AppLinkCard
            title="Customer app"
            subtitle="End-user ordering & tracking"
            url={links.customerApp}
          />
        )}

        {links.businessApp && (
          <AppLinkCard
            title="Business app"
            subtitle="Restaurant & store management"
            url={links.businessApp}
          />
        )}

        {links.driverApp && (
          <AppLinkCard
            title="Driver app"
            subtitle="Delivery & dispatch operations"
            url={links.driverApp}
          />
        )}
      </Stack>
    </Box>
  );
}

function AppLinkCard({
  title,
  subtitle,
  url,
}: {
  title: string;
  subtitle: string;
  url: string;
}) {
  return (
    <Paper
      sx={{
        flex: 1,
        p: 3,
        borderRadius: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Stack direction="row" spacing={1} alignItems="center">
          <AndroidIcon color="success" />
          <Typography fontWeight={700}>{title}</Typography>
        </Stack>

        <Typography color="text.secondary" sx={{ mt: 1 }}>
          {subtitle}
        </Typography>
      </Box>

      <Button
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        endIcon={<OpenInNewIcon />}
        sx={{ mt: 2, alignSelf: "flex-start", color: "#fff" }}
      >
        View on Google Play
      </Button>
    </Paper>
  );
}
