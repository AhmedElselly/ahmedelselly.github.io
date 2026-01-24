"use client";

import { useEffect, useState } from "react";
import { Box, Stack, IconButton, Tooltip } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import BuildIcon from "@mui/icons-material/Build";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import EmailIcon from "@mui/icons-material/Email";

const sections = [
  { id: "hero", label: "Home", icon: <HomeIcon fontSize="small" /> },
  { id: "services", label: "Services", icon: <BuildIcon fontSize="small" /> },
  {
    id: "testimonials",
    label: "Testimonials",
    icon: <FormatQuoteIcon fontSize="small" />,
  },
  { id: "projects", label: "Projects", icon: <WorkIcon fontSize="small" /> },
  { id: "contact", label: "Contact", icon: <EmailIcon fontSize="small" /> },
];

export default function SectionNavigator() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observers = sections.map((section) => {
      const el = document.getElementById(section.id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(section.id);
        },
        { rootMargin: "-40% 0px -40% 0px" },
      );

      observer.observe(el);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <Box
      sx={{
        position: "fixed",
        zIndex: 1200,

        // Desktop: right middle
        right: { xs: "50%", md: 20 },
        top: { xs: "auto", md: "50%" },
        bottom: { xs: 16, md: "auto" },
        transform: {
          xs: "translateX(50%)",
          md: "translateY(-50%)",
        },
      }}
    >
      <Stack
        direction={{ xs: "row", md: "column" }}
        spacing={{ xs: 0.5, md: 0.8 }}
        sx={{
          bgcolor: "rgba(0,0,0,0.35)",
          backdropFilter: "blur(10px)",
          borderRadius: 6,
          px: { xs: 1.2, md: 0.7 },
          py: { xs: 0.7, md: 0.9 },
        }}
      >
        {sections.map((section) => {
          const isActive = active === section.id;

          return (
            <Tooltip
              key={section.id}
              title={section.label}
              placement={"left"}
              arrow
            >
              <IconButton
                onClick={() => scrollTo(section.id)}
                aria-label={section.label}
                sx={{
                  color: isActive ? "white" : "grey.300",
                  bgcolor: isActive ? "rgba(255,255,255,0.12)" : "transparent",
                  transition: "all 0.25s ease",
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.18)",
                  },
                }}
              >
                {section.icon}
              </IconButton>
            </Tooltip>
          );
        })}
      </Stack>
    </Box>
  );
}

// "use client";

// import { useEffect, useState } from "react";
// import { Box, Stack, IconButton, Tooltip } from "@mui/material";

// import HomeIcon from "@mui/icons-material/Home";
// import WorkIcon from "@mui/icons-material/Work";
// import BuildIcon from "@mui/icons-material/Build";
// import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
// import EmailIcon from "@mui/icons-material/Email";

// const sections = [
//   { id: "hero", label: "Home", icon: <HomeIcon fontSize="small" /> },
//   { id: "services", label: "Services", icon: <BuildIcon fontSize="small" /> },
//   {
//     id: "testimonials",
//     label: "Testimonials",
//     icon: <FormatQuoteIcon fontSize="small" />,
//   },
//   { id: "projects", label: "Projects", icon: <WorkIcon fontSize="small" /> },
//   { id: "contact", label: "Contact", icon: <EmailIcon fontSize="small" /> },
// ];

// export default function SectionNavigator() {
//   const [active, setActive] = useState<string>("hero");

//   useEffect(() => {
//     const observers = sections.map((section) => {
//       const el = document.getElementById(section.id);
//       if (!el) return null;

//       const observer = new IntersectionObserver(
//         ([entry]) => {
//           if (entry.isIntersecting) setActive(section.id);
//         },
//         { rootMargin: "-40% 0px -40% 0px" },
//       );

//       observer.observe(el);
//       return observer;
//     });

//     return () => {
//       observers.forEach((observer) => observer?.disconnect());
//     };
//   }, []);

//   const scrollTo = (id: string) => {
//     document.getElementById(id)?.scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });
//   };

//   return (
//     <Box
//       sx={{
//         position: "fixed",
//         right: 20,
//         top: "50%",
//         transform: "translateY(-50%)",
//         zIndex: 1200,
//         display: { xs: "none", md: "block" },
//       }}
//     >
//       <Stack
//         spacing={1}
//         sx={{
//           bgcolor: "rgba(0,0,0,0.25)",
//           backdropFilter: "blur(6px)",
//           borderRadius: 6,
//           p: 0.7,
//         }}
//       >
//         {sections.map((section) => {
//           const isActive = active === section.id;

//           return (
//             <Tooltip
//               key={section.id}
//               title={section.label}
//               placement="left"
//               arrow
//             >
//               <IconButton
//                 key={section.id}
//                 onClick={() => scrollTo(section.id)}
//                 aria-label={section.label}
//                 sx={{
//                   color: isActive ? "white" : "grey.300",
//                   bgcolor: isActive ? "rgba(255,255,255,0.08)" : "transparent",
//                   transition: "all 0.25s ease",
//                   "&:hover": {
//                     bgcolor: "rgba(255,255,255,0.12)",
//                   },
//                 }}
//               >
//                 {section.icon}
//               </IconButton>
//             </Tooltip>
//           );
//         })}
//       </Stack>
//     </Box>
//   );
// }
