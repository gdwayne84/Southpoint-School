import { NavLinkInfo, ResourceFile, FooterLink, CalendarEvent, FeeSchedule } from './types';

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
      { label: 'School Calendar', path: '/calendar' },
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

export const FEE_SCHEDULES: FeeSchedule[] = [
  {
    id: "prek1",
    level: "Pre-K1",
    fees: [
      { label: "Tuition Fees", value: "₱27,455.48" },
      { label: "Miscellaneous", value: "₱21,069.40" },
      { label: "Total School Fees", value: "₱48,524.88", isBold: true },
      { label: "", value: "", isSpace: true },
      { label: "Downpayment for TF/Misc.", value: "₱5,000.00" },
      { label: "Modules", value: "₱3,000.00" },
      { label: "UPON ENROLMENT", value: "₱8,000.00", isBold: true },
      { label: "", value: "", isSpace: true },
      { label: "Monthly Dues - July to March", value: "₱4,837.00", isBold: true },
    ],
    requirements: ["Entrance Test", "PSA Birth Certificate (Photocopy)", "Fill out Enrolment Form or Online Enrolment"],
    discount: "A 3% discount on tuition fees is given for one-time full payment of the entire year's matriculation made on or before May 30, 2025."
  },
  {
    id: "prek2",
    level: "Pre-K2",
    fees: [
      { label: "Tuition Fees", value: "₱24,088.12" },
      { label: "Miscellaneous", value: "₱23,136.30" },
      { label: "Total School Fees", value: "₱47,224.42", isBold: true },
      { label: "", value: "", isSpace: true },
      { label: "Downpayment for TF/Misc.", value: "₱5,000.00" },
      { label: "Modules", value: "₱3,000.00" },
      { label: "Math Textbooks", value: "₱1,800.00" },
      { label: "UPON ENROLMENT", value: "₱9,800.00", isBold: true },
      { label: "", value: "", isSpace: true },
      { label: "Monthly Dues - July to March", value: "₱4,692.00", isBold: true },
    ],
    requirements: ["Entrance Test", "PSA Birth Certificate (Photocopy)", "Fill out Enrolment Form or Online Enrolment"],
    discount: "A 3% discount on tuition fees is given for one-time full payment of the entire year's matriculation made on or before May 30, 2025."
  },
  {
    id: "grade1",
    level: "Grade 1",
    fees: [
      { label: "Tuition Fees", value: "₱21,883.33" },
      { label: "Miscellaneous", value: "₱21,663.40" },
      { label: "Total School Fees", value: "₱43,546.73", isBold: true },
      { label: "", value: "", isSpace: true },
      { label: "Downpayment for TF/Misc.", value: "₱5,000.00" },
      { label: "Modules", value: "₱3,000.00" },
      { label: "Math Textbooks", value: "₱1,800.00" },
      { label: "Scholastic", value: "₱2,500.00" },
      { label: "UPON ENROLMENT", value: "₱12,300.00", isBold: true },
      { label: "", value: "", isSpace: true },
      { label: "Monthly Dues - July to March", value: "₱4,283.00", isBold: true },
    ],
    requirements: ["Entrance Test", "PSA Birth Certificate (Photocopy)", "Kindergarten – ECCD Summative Assessment", "Report Card", "Fill out Enrolment Form or Online Enrolment"],
    discount: "A 3% discount on tuition fees is given for one-time full payment of the entire year's matriculation made on or before May 30, 2025."
  },
  {
    id: "grade2",
    level: "Grade 2",
    fees: [
      { label: "Tuition Fees", value: "₱21,883.33" },
      { label: "Miscellaneous", value: "₱21,663.40" },
      { label: "Total School Fees", value: "₱43,546.73", isBold: true },
      { label: "", value: "", isSpace: true },
      { label: "Downpayment for TF/Misc.", value: "₱5,000.00" },
      { label: "Modules", value: "₱3,000.00" },
      { label: "Math Textbooks", value: "₱1,800.00" },
      { label: "Scholastic", value: "₱2,500.00" },
      { label: "UPON ENROLMENT", value: "₱12,300.00", isBold: true },
      { label: "", value: "", isSpace: true },
      { label: "Monthly Dues - July to March", value: "₱4,283.00", isBold: true },
    ],
    requirements: ["Entrance Test (for Transferees only)", "PSA Birth Certificate (Photocopy)", "Report Card", "Good Moral Certificate (for Transferees)", "Fill out Enrolment Form or Online Enrolment"],
    discount: "A 3% discount on tuition fees is given for one-time full payment of the entire year's matriculation made on or before May 30, 2025."
  },
  {
    id: "grade3",
    level: "Grade 3",
    fees: [
      { label: "Tuition Fees", value: "₱21,883.33" },
      { label: "Miscellaneous", value: "₱21,663.40" },
      { label: "Total School Fees", value: "₱43,546.73", isBold: true },
      { label: "", value: "", isSpace: true },
      { label: "Downpayment for TF/Misc.", value: "₱5,000.00" },
      { label: "Modules", value: "₱3,000.00" },
      { label: "Math Textbooks", value: "₱1,800.00" },
      { label: "Scholastic", value: "₱2,500.00" },
      { label: "UPON ENROLMENT", value: "₱12,300.00", isBold: true },
      { label: "", value: "", isSpace: true },
      { label: "Monthly Dues - July to March", value: "₱4,283.00", isBold: true },
    ],
    requirements: ["Entrance Test (for Transferees only)", "PSA Birth Certificate (Photocopy)", "Report Card", "Good Moral Certificate (for Transferees)", "Fill out Enrolment Form or Online Enrolment"],
    discount: "A 3% discount on tuition fees is given for one-time full payment of the entire year's matriculation made on or before May 30, 2025."
  },
  {
    id: "grade4",
    level: "Grade 4",
    fees: [
      { label: "Tuition Fees", value: "₱22,882.19" },
      { label: "Miscellaneous", value: "₱27,188.70" },
      { label: "Total School Fees", value: "₱50,070.89", isBold: true },
      { label: "", value: "", isSpace: true },
      { label: "Downpayment for TF/Misc.", value: "₱5,000.00" },
      { label: "Modules", value: "₱2,780.00" },
      { label: "Math Textbooks", value: "₱1,800.00" },
      { label: "Scholastic", value: "₱2,500.00" },
      { label: "UPON ENROLMENT", value: "₱12,080.00", isBold: true },
      { label: "", value: "", isSpace: true },
      { label: "Monthly Dues - July to March", value: "₱5,008.00", isBold: true },
    ],
    requirements: ["Entrance Test (for Transferees only)", "PSA Birth Certificate (Photocopy)", "Report Card", "Good Moral Certificate (for Transferees)", "Fill out Enrolment Form or Online Enrolment"],
    discount: "A 3% discount on tuition fees is given for one-time full payment of the entire year's matriculation made on or before May 30, 2025."
  },
  {
    id: "grade5",
    level: "Grade 5",
    fees: [
      { label: "Tuition Fees", value: "₱22,882.19" },
      { label: "Miscellaneous", value: "₱27,188.70" },
      { label: "Total School Fees", value: "₱50,070.89", isBold: true },
      { label: "", value: "", isSpace: true },
      { label: "Downpayment for TF/Misc.", value: "₱5,000.00" },
      { label: "Modules", value: "₱2,780.00" },
      { label: "Math Textbooks", value: "₱1,800.00" },
      { label: "Scholastic", value: "₱2,500.00" },
      { label: "UPON ENROLMENT", value: "₱12,080.00", isBold: true },
      { label: "", value: "", isSpace: true },
      { label: "Monthly Dues - July to March", value: "₱5,008.00", isBold: true },
    ],
    requirements: ["Entrance Test (for Transferees only)", "PSA Birth Certificate (Photocopy)", "Report Card", "Good Moral Certificate (for Transferees)", "Fill out Enrolment Form or Online Enrolment"],
    discount: "A 3% discount on tuition fees is given for one-time full payment of the entire year's matriculation made on or before May 30, 2025."
  },
  {
    id: "grade6",
    level: "Grade 6",
    fees: [
      { label: "Tuition Fees", value: "₱22,882.19" },
      { label: "Miscellaneous", value: "₱29,472.30" },
      { label: "Total School Fees", value: "₱52,354.49", isBold: true },
      { label: "", value: "", isSpace: true },
      { label: "Downpayment for TF/Misc.", value: "₱5,000.00" },
      { label: "Modules", value: "₱2,780.00" },
      { label: "Math Textbooks", value: "₱1,800.00" },
      { label: "Scholastic", value: "₱2,500.00" },
      { label: "UPON ENROLMENT", value: "₱12,080.00", isBold: true },
      { label: "", value: "", isSpace: true },
      { label: "Monthly Dues - July to March", value: "₱5,262.00", isBold: true },
    ],
    requirements: ["Entrance Test (for Transferees only)", "PSA Birth Certificate (Photocopy)", "Report Card", "Good Moral Certificate (for Transferees)", "Fill out Enrolment Form or Online Enrolment"],
    discount: "A 3% discount on tuition fees is given for one-time full payment of the entire year's matriculation made on or before May 30, 2025."
  },
  {
    id: "grade7",
    level: "Grade 7",
    fees: [
      { label: "Tuition Fees", value: "₱28,400.47" },
      { label: "Miscellaneous", value: "₱27,390.00" },
      { label: "Total School Fees", value: "₱55,790.47", isBold: true },
      { label: "", value: "", isSpace: true },
      { label: "Downpayment for TF/Misc.", value: "₱5,000.00" },
      { label: "Modules", value: "₱3,080.00" },
      { label: "Scholastic", value: "₱2,500.00" },
      { label: "UPON ENROLMENT", value: "₱10,580.00", isBold: true },
      { label: "", value: "", isSpace: true },
      { label: "Monthly Dues - July to March", value: "₱5,644.00", isBold: true },
    ],
    requirements: ["Entrance Test (for Transferees only)", "Interview by the Principal/Coordinator (for Transferees only)", "PSA Birth Certificate (Photocopy)", "Report Card", "Good Moral Certificate (for Transferees)", "Fill out Enrolment Form or Online Enrolment"],
    discount: "A 3% discount on tuition fees is given for one-time full payment of the entire year's matriculation made on or before May 30, 2025."
  },
  {
    id: "grade8",
    level: "Grade 8",
    fees: [
      { label: "Tuition Fees", value: "₱28,400.47" },
      { label: "Miscellaneous", value: "₱27,390.00" },
      { label: "Total School Fees", value: "₱55,790.47", isBold: true },
      { label: "", value: "", isSpace: true },
      { label: "Downpayment for TF/Misc.", value: "₱5,000.00" },
      { label: "Modules", value: "₱3,080.00" },
      { label: "Scholastic", value: "₱2,500.00" },
      { label: "UPON ENROLMENT", value: "₱10,580.00", isBold: true },
      { label: "", value: "", isSpace: true },
      { label: "Monthly Dues - July to March", value: "₱5,644.00", isBold: true },
    ],
    requirements: ["Entrance Test (for Transferees only)", "Interview by the Principal/Coordinator (for Transferees only)", "PSA Birth Certificate (Photocopy)", "Report Card", "Good Moral Certificate (for Transferees)", "Fill out Enrolment Form or Online Enrolment"],
    discount: "A 3% discount on tuition fees is given for one-time full payment of the entire year's matriculation made on or before May 30, 2025."
  },
  {
    id: "grade9",
    level: "Grade 9",
    fees: [
      { label: "Tuition Fees", value: "₱28,400.47" },
      { label: "Miscellaneous", value: "₱27,390.00" },
      { label: "Total School Fees", value: "₱55,790.47", isBold: true },
      { label: "", value: "", isSpace: true },
      { label: "Downpayment for TF/Misc.", value: "₱5,000.00" },
      { label: "Modules", value: "₱3,080.00" },
      { label: "Scholastic", value: "₱2,500.00" },
      { label: "UPON ENROLMENT", value: "₱10,580.00", isBold: true },
      { label: "", value: "", isSpace: true },
      { label: "Monthly Dues - July to March", value: "₱5,644.00", isBold: true },
    ],
    requirements: ["Entrance Test (for Transferees only)", "Interview by the Principal/Coordinator (for Transferees only)", "PSA Birth Certificate (Photocopy)", "Report Card", "Good Moral Certificate (for Transferees)", "Fill out Enrolment Form or Online Enrolment"],
    discount: "A 3% discount on tuition fees is given for one-time full payment of the entire year's matriculation made on or before May 30, 2025."
  },
  {
    id: "grade10",
    level: "Grade 10",
    fees: [
      { label: "Tuition Fees", value: "₱28,400.47" },
      { label: "Miscellaneous", value: "₱29,673.60" },
      { label: "Total School Fees", value: "₱58,074.07", isBold: true },
      { label: "", value: "", isSpace: true },
      { label: "Downpayment for TF/Misc.", value: "₱5,000.00" },
      { label: "Modules", value: "₱3,080.00" },
      { label: "Scholastic", value: "₱2,500.00" },
      { label: "UPON ENROLMENT", value: "₱10,580.00", isBold: true },
      { label: "", value: "", isSpace: true },
      { label: "Monthly Dues - July to March", value: "₱5,898.00", isBold: true },
    ],
    requirements: ["Entrance Test (for Transferees only)", "Interview by the Principal/Coordinator (for Transferees only)", "PSA Birth Certificate (Photocopy)", "Report Card", "Good Moral Certificate (for Transferees)", "Fill out Enrolment Form or Online Enrolment"],
    discount: "A 3% discount on tuition fees is given for one-time full payment of the entire year's matriculation made on or before May 30, 2025."
  },
  {
    id: "grade11",
    level: "Grade 11",
    fees: [
      { label: "Tuition Fees", value: "₱37,041.00" },
      { label: "Miscellaneous", value: "₱20,745.00" },
      { label: "Total School Fees", value: "₱57,786.00", isBold: true },
      { label: "", value: "", isSpace: true },
      { label: "Downpayment for TF/Misc.", value: "₱5,000.00" },
      { label: "Modules", value: "₱3,080.00" },
      { label: "Scholastic", value: "₱2,500.00" },
      { label: "UPON ENROLMENT", value: "₱10,580.00", isBold: true },
      { label: "", value: "", isSpace: true },
      { label: "Monthly Dues - July to March", value: "₱5,866.00", isBold: true },
    ],
    requirements: ["Entrance Test (for Transferees only)", "Interview by the Principal/Coordinator (for Transferees only)", "PSA Birth Certificate (Photocopy)", "Report Card", "Good Moral Certificate (for Transferees)", "Fill out Enrolment Form or Online Enrolment"],
    discount: "A 3% discount on tuition fees is given for one-time full payment of the entire year's matriculation made on or before May 30, 2025."
  },
  {
    id: "grade12",
    level: "Grade 12",
    fees: [
      { label: "Tuition Fees", value: "₱40,745.10" },
      { label: "Miscellaneous", value: "₱23,049.00" },
      { label: "Total School Fees", value: "₱63,794.10", isBold: true },
      { label: "", value: "", isSpace: true },
      { label: "Downpayment for TF/Misc.", value: "₱5,000.00" },
      { label: "Modules", value: "₱3,080.00" },
      { label: "Scholastic", value: "₱2,500.00" },
      { label: "UPON ENROLMENT", value: "₱10,580.00", isBold: true },
      { label: "", value: "", isSpace: true },
      { label: "Monthly Dues - July to March", value: "₱6,533.00", isBold: true },
    ],
    requirements: ["Entrance Test (for Transferees only)", "Interview by the Principal/Coordinator (for Transferees only)", "PSA Birth Certificate (Photocopy)", "Report Card", "Good Moral Certificate (for Transferees)", "Fill out Enrolment Form or Online Enrolment"],
    discount: "A 3% discount on tuition fees is given for one-time full payment of the entire year's matriculation made on or before May 30, 2025."
  }
];
