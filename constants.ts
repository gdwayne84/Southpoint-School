import { NavLinkInfo, ResourceFile, FooterLink } from './types';

export const NAV_LINKS: NavLinkInfo[] = [
  { label: 'Home', path: '/' },
  { 
    label: 'About', 
    children: [
      { label: 'Our School', path: '/about' },
      { label: 'Gallery', path: '/gallery' },
    ] 
  },
  { label: 'Admissions', path: '/admissions' },
  { label: 'Academics', path: '/academics' },
  { 
    label: 'Campus Life', 
    children: [
      { label: 'Student Life', path: '/student-life' },
      { label: 'Parent Resources', path: '/parent-resources' },
    ] 
  },
  { label: 'Contact Us', path: '/contact' },
];

export const RESOURCE_FILES: ResourceFile[] = [
  {
    name: 'Student Handbook 2024-2025',
    description: 'The official handbook covering school policies, code of conduct, and academic guidelines.',
    url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  {
    name: 'School Calendar 2024-2025',
    description: 'Key dates for the academic year, including holidays, examination periods, and school events.',
    url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  {
    name: 'Enrollment Form',
    description: 'The official form for new and returning student enrollment.',
    url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  {
    name: 'Medical Information Form',
    description: 'A required form for detailing student medical history and emergency contact information.',
    url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
];

export const FOOTER_LINKS: FooterLink[] = [
    { label: 'About Us', path: '/about' },
    { label: 'Admissions', path: '/admissions' },
    { label: 'Academics', path: '/academics' },
    { label: 'Contact Us', path: '/contact' },
];
