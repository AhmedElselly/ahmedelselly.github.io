export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  solution: string;
  impact: string[];
  tech: string[];
  image: string;
  role: string;
  architecture: string[];
  challenges: string[];
  features: string[];
  screenshots?: string[];
  linksAndroid?: AndroidLinksProps;
};

export type AndroidLinksProps = {
  links?: {
    customerApp?: string;
    businessApp?: string;
    driverApp?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "multi-vendor-delivery-platform",
    title: "Multi-Vendor Delivery Platform",
    subtitle: "End-to-end ecosystem for customers, businesses, and riders",
    description:
      "A production-grade multi-application delivery platform including customer, business, and rider apps, backed by a real-time GraphQL system.",
    problem:
      "Businesses needed a scalable delivery system that could handle multi-vendor orders, live rider assignment, real-time order updates, and high notification reliability across different user roles.",
    solution:
      "I designed and built a full-stack ecosystem with separate applications for customers, businesses, and riders, powered by a unified GraphQL backend. The platform supports real-time order flow, location tracking, push notifications, and role-based access control.",
    role: "Full-stack engineer responsible for system architecture, mobile apps, backend services, and real-time communication layers.",
    architecture: [
      "Multi-app architecture (Customer, Business, Rider)",
      "GraphQL API with subscriptions for real-time events",
      "Role-based authentication and access control",
      "Geo-based order assignment and tracking",
      "Push notification infrastructure (FCM)",
    ],
    challenges: [
      "Designing reliable real-time order state synchronization",
      "Handling geolocation and distance-based queries",
      "Ensuring notification delivery and retry strategies",
      "Keeping business edits and order recalculations consistent",
      "Supporting Arabic printing and special hardware integrations",
    ],
    features: [
      "Live order tracking",
      "Rider dispatch system",
      "Business order management dashboard",
      "Push notification and fallback flows",
      "Receipt printing and order formatting",
    ],
    impact: [
      "Supported real-time order tracking and dispatch",
      "Enabled multi-role access (customer, business, rider)",
      "Built scalable GraphQL architecture with subscriptions",
      "Integrated reliable push notifications (FCM)",
    ],
    tech: [
      "React Native",
      "Expo",
      "Next.js",
      "Node.js",
      "GraphQL",
      "MongoDB",
      "Firebase FCM",
      "Geo queries",
    ],
    image: "/projects/orderat_project.png",
    linksAndroid: {
      links: {
        customerApp:
          "https://play.google.com/store/apps/details?id=com.orderatcustomer.app&hl=en",
        businessApp:
          "https://play.google.com/store/apps/details?id=com.orderatbusiness.app",
        driverApp:
          "https://play.google.com/store/apps/details?id=com.orderatrider.app",
      },
    },
  },
];
