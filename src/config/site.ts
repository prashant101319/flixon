/**
 * ============================================================
 *  FLIXON IT SOLUTIONS — SITE CONFIGURATION
 *  Every company detail shown on the website lives here.
 *  Replace each value marked  // TODO  with your real information.
 * ============================================================
 */

export const site = {
  name: "Flixon IT Solutions",
  legalName: "Flixon IT Solutions Private Limited",
  shortName: "Flixon",
  tagline: "Cloud, AI and mobile engineering for ambitious businesses",
  description:
    "Flixon IT Solutions builds secure cloud platforms, AI and generative-AI products, and high-performance mobile and web apps using the latest technologies.",

  url: "https://www.flixonit.com", // TODO: your live domain
  email: "hello@flixonit.com", // TODO: main enquiry email
  careersEmail: "careers@flixonit.com", // TODO: hiring email
  phone: "+91 00000 00000", // TODO: business phone
  whatsapp: "", // TODO (optional): e.g. "919876543210" to show a WhatsApp button
  hours: "Mon to Fri, 10:00 to 19:00 IST", // TODO: working hours

  address: {
    line1: "Office address line 1", // TODO
    line2: "Office address line 2", // TODO
    city: "Pune", // TODO
    state: "Maharashtra", // TODO
    pincode: "411000", // TODO
    country: "India",
  },
  // TODO (optional): Google Maps "Embed a map" URL (https://www.google.com/maps/embed?pb=...)
  mapEmbedUrl: "",

  cin: "CIN: to be added", // TODO: Corporate Identity Number
  gstin: "", // TODO (optional)
  founded: 2024, // TODO: year of incorporation

  social: {
    linkedin: "https://www.linkedin.com/company/", // TODO
    x: "https://x.com/", // TODO
    github: "https://github.com/", // TODO
    instagram: "https://www.instagram.com/", // TODO
  },

  // TODO: replace with your real numbers (shown on Home and About)
  stats: [
    { value: 25, suffix: "+", label: "Projects delivered" },
    { value: 15, suffix: "+", label: "Happy clients" },
    { value: 20, suffix: "+", label: "Engineers and designers" },
    { value: 5, suffix: "", label: "Countries served" },
  ],
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", hasMenu: true },
  { label: "Industries", href: "/industries" },
  { label: "Technologies", href: "/technologies" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Careers", href: "/careers" },
] as const;

export const fullAddress = [
  site.address.line1,
  site.address.line2,
  `${site.address.city}, ${site.address.state} ${site.address.pincode}`,
  site.address.country,
]
  .filter(Boolean)
  .join(", ");
