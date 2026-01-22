export type Testimonial = {
  id: string;
  text: string;
  client: string;
  projectType: string;
  projectUrl: string;
  platform: "Freelancer";
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: "freelancer-1",
    text: "Ahmed is an exceptional developer and a true professional. He consistently delivered high-quality work, met deadlines, and went above and beyond to ensure the project's success. His communication skills are excellent, and he was always proactive in suggesting improvements. I highly recommend Ahmed to anyone looking for a skilled and reliable developer. Looking forward to working with him again.",
    client: "Client (Freelancer): Mahmoud S.",
    projectType: "Fixing Orderat Admin Dashboard, Website, and Expo",
    projectUrl:
      "https://www.freelancer.com/projects/javascript/Fixing-Orderat-Admin-Dashboard-Website/reviews",
    platform: "Freelancer",
    rating: 5,
  },
  {
    id: "freelancer-2",
    text: "Working with Ahmed was a pleasure. He is highly responsive and works efficiently, always providing frequent updates throughout each milestone. His attention to detail ensures the work consistently aligns with the project requirements. Additionally, he offers valuable recommendations to enhance the site as the project progresses. I highly recommend Ahmed for your next frontend development project.",
    client: "Client (Freelancer): Michel M.",
    projectType:
      "Looking for a Frontend Developer to redesign existing ecommerce / Multi Vendor website",
    projectUrl:
      "https://www.freelancer.com/projects/website-design/Looking-for-Frontend-Developer-redesign/reviews",
    platform: "Freelancer",
    rating: 5,
  },
  {
    id: "freelancer-3",
    text: "Ahmed is a good developer, who had supported us with our development needs. The communication part had been extremely easy for us as, we were initially worried on, how will we explain the exact requirement , which we had to implemented into our existing software, but to our blessing we found Ahmed and it all went smoothly and not many hiccups. He had delivered us the software changes like a true professional, and was clear in communicating to us what can be done and what doesn't make sense. To add on it he was also open to accepting suggestions and changes, which we pointed out and he quickly worked his way around it. Overall I recommend Mr Ahmed for your development requirement, just be clear in expressing what are your requirement and he will deliver to you without any hassle. Wishing good luck Arun Rajeev.",
    client: "Client (Freelancer): Arun R.",
    projectType: "Build me a User credentials in my software.",
    projectUrl:
      "https://www.freelancer.com/projects/php/Build-User-credentials-software/reviews",
    platform: "Freelancer",
    rating: 5,
  },
];
