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

export const CALENDAR_EVENTS: CalendarEvent[] = [
  // August 2024
  { date: '2024-08-19', title: 'Start of Classes', category: 'Event' },
  { date: '2024-08-21', title: 'Ninoy Aquino Day', category: 'Holiday' },
  { date: '2024-08-26', title: 'National Heroes Day', category: 'Holiday' },
  // September 2024
  { date: '2024-09-16', title: '1st Quarter Exams', category: 'Exam' },
  { date: '2024-09-17', title: '1st Quarter Exams', category: 'Exam' },
  { date: '2024-09-18', title: '1st Quarter Exams', category: 'Exam' },
  // October 2024
  { date: '2024-10-28', title: 'Semestral Break Begins', category: 'No Classes' },
  // November 2024
  { date: '2024-11-01', title: 'All Saints\' Day', category: 'Holiday' },
  { date: '2024-11-04', title: 'Classes Resume', category: 'Event' },
  { date: '2024-11-20', title: '2nd Quarter Exams', category: 'Exam' },
  { date: '2024-11-21', title: '2nd Quarter Exams', category: 'Exam' },
  { date: '2024-11-22', title: '2nd Quarter Exams', category: 'Exam' },
  { date: '2024-11-30', title: 'Bonifacio Day', category: 'Holiday' },
  // December 2024
  { date: '2024-12-20', title: 'Christmas Break Begins', category: 'No Classes' },
  { date: '2024-12-25', title: 'Christmas Day', category: 'Holiday' },
  { date: '2024-12-30', title: 'Rizal Day', category: 'Holiday' },
  // January 2025
  { date: '2025-01-01', title: 'New Year\'s Day', category: 'Holiday' },
  { date: '2025-01-06', title: 'Classes Resume', category: 'Event' },
  { date: '2025-01-27', title: '3rd Quarter Exams', category: 'Exam' },
  { date: '2025-01-28', title: '3rd Quarter Exams', category: 'Exam' },
  { date: '2025-01-29', title: '3rd Quarter Exams', category: 'Exam' },
  // February 2025
  { date: '2025-02-25', title: 'EDSA People Power Anniversary', category: 'Holiday' },
  // March 2025
  { date: '2025-03-24', title: '4th Quarter Exams', category: 'Exam' },
  { date: '2025-03-25', title: '4th Quarter Exams', category: 'Exam' },
  { date: '2025-03-26', title: '4th Quarter Exams', category: 'Exam' },
  // April 2025
  { date: '2025-04-09', title: 'Araw ng Kagitingan', category: 'Holiday' },
  { date: '2025-04-17', title: 'Maundy Thursday', category: 'Holiday' },
  { date: '2025-04-18', title: 'Good Friday', category: 'Holiday' },
  // May 2025
  { date: '2025-05-01', title: 'Labor Day', category: 'Holiday' },
  { date: '2025-05-15', title: 'End of School Year', category: 'Event' },
  // June 2025
  { date: '2025-06-12', title: 'Independence Day', category: 'Holiday' },
];
