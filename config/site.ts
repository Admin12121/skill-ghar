export const menus = [
  {
    label: "About",
    href: "/about",
  },
  {
    id: "services",
    label: "Services",
    children: [
      { label: "Home Renovation", href: "/services/home-renovation/" },
      {
        label: "Modular kitchen", href: "/services/modular-kitchen/"
      },
      {
        label: "Water Proofing", href: "/services/water-proofing/"
      },
      {
        label: "Roofing", href: "/services/roofing/"
      },
      { label: "Washroom Re-modelling", href: "/services/washroom-re-modelling/" },
      { label: "Electric and Plumbing", href: "/services/electric-and-plumbing/" },
    ],
  },
  {
    label: "Projects", href: "/projects/",
  },
  { id: "contact", label: "Contact Us", href: "/contact-us/" },
];
