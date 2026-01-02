export interface MenuItem {
  id?: string;
  label: string;
  href?: string;
  children?: MenuItem[];
}

export const staticMenus: MenuItem[] = [
  {
    label: "About",
    href: "/about",
  },
  {
    id: "services",
    label: "Services",
    children: [],
  },
  {
    label: "Projects",
    href: "/projects/",
  },
  { 
    id: "contact", 
    label: "Contact Us", 
    href: "/contact-us/" 
  },
];