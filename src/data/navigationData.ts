export interface NavLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export const HEADER_NAV_LINKS: NavLink[] = [
  { label: 'Platform', href: '/platform' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Integrations', href: '/integrations' },
  { label: 'ROI', href: '/roi' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Customers', href: '/customers' },
  { label: 'Resources', href: '/resources' },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'Platform',
    links: [
      { label: 'How it works', href: '/platform' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Integrations', href: '/integrations' },
      { label: 'ROI calculator', href: '/roi' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Owners & C-suite', href: '/solutions' },
      { label: 'Managers', href: '/solutions/managers' },
      { label: 'Sales reps', href: '/solutions/sales-reps' },
      { label: 'Marketing', href: '/solutions/marketing' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Customers', href: '/customers' },
      { label: 'Careers', href: '/careers' },
      { label: 'Resources', href: '/resources' },
    ],
  },
];

export const COMPANY_CONTACT = {
  addressLine1: '8 The Green, Suite A',
  addressLine2: 'Dover, DE 19901, USA',
  email: 'info@dentalpulseai.com',
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/dentalpulseai/',
    icon: '/linkedin.png',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/dentalpulseai/',
    icon: '/instagram.png',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/people/Dental-Pulse/61594145142887/',
    icon: '/facebook.png',
  },
];
