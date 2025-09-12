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
  // June 2025
  { date: '2025-06-16', title: 'Students’ Orientation (Half Day)', category: 'Event' },
  { date: '2025-06-22', title: 'Parents’ Orientation', category: 'Event' },
  { date: '2025-06-23', title: 'Regular Classes Begin', category: 'Event' },

  // July 2025
  { date: '2025-07-04', title: 'Convocation Day', category: 'Event' },
  { date: '2025-07-04', title: 'SC Filing of Candidacy', category: 'Event' },
  { date: '2025-07-09', title: 'SC Campaign Period', category: 'Event' },
  { date: '2025-07-10', title: 'SC Campaign Period', category: 'Event' },
  { date: '2025-07-11', title: 'SC Election', category: 'Event' },
  { date: '2025-07-17', title: 'First Monthly Test', category: 'Exam' },
  { date: '2025-07-18', title: 'First Monthly Test', category: 'Exam' },
  { date: '2025-07-19', title: 'First Aid Training (Teachers & SC)', category: 'Event' },
  { date: '2025-07-26', title: 'SC Leadership Training', category: 'Event' },
  { date: '2025-07-28', title: 'Nutrition Week', category: 'Event' },
  { date: '2025-07-29', title: 'Nutrition Week', category: 'Event' },
  { date: '2025-07-30', title: 'Nutrition Week', category: 'Event' },
  { date: '2025-07-31', title: 'Nutrition Week', category: 'Event' },

  // August 2025
  { date: '2025-08-01', title: 'Convocation Day', category: 'Event' },
  { date: '2025-08-19', title: 'First Periodic Test', category: 'Exam' },
  { date: '2025-08-20', title: 'First Periodic Test', category: 'Exam' },
  { date: '2025-08-21', title: 'Ninoy Aquino Day', category: 'Holiday' },            // National Holiday
  { date: '2025-08-22', title: 'First Periodic Test', category: 'Exam' },
  { date: '2025-08-25', title: 'National Heroes Day', category: 'Holiday' },          // National Holiday
  { date: '2025-08-29', title: 'Buwan ng Wika Culminating Activity', category: 'Event' },

  // September 2025
  { date: '2025-09-05', title: 'Convocation Day', category: 'Event' },
  { date: '2025-09-06', title: 'PTC & ROH (1st Grading)', category: 'Event' },
  { date: '2025-09-18', title: 'Second Monthly Test', category: 'Exam' },
  { date: '2025-09-19', title: 'Second Monthly Test', category: 'Exam' },
  { date: '2025-09-29', title: 'Environmental Awareness', category: 'Event' },
  { date: '2025-09-30', title: 'Environmental Awareness', category: 'Event' },

  // October 2025
  { date: '2025-10-03', title: 'Teachers’ Day Celebration', category: 'Event' },
  { date: '2025-10-10', title: 'Convocation Day', category: 'Event' },
  { date: '2025-10-22', title: 'Second Periodic Test', category: 'Exam' },
  { date: '2025-10-23', title: 'Second Periodic Test', category: 'Exam' },
  { date: '2025-10-24', title: 'Second Periodic Test', category: 'Exam' },
  { date: '2025-10-31', title: 'UN Culmination', category: 'Event' },
  { date: '2025-10-31', title: 'All Saints’ Eve', category: 'Holiday' },

  // November 2025
  { date: '2025-11-01', title: 'All Saints’ Day', category: 'Holiday' },
  { date: '2025-11-04', title: 'Medical Check-up', category: 'Event' },
  { date: '2025-11-05', title: 'Medical Check-up', category: 'Event' },
  { date: '2025-11-06', title: 'Medical Check-up', category: 'Event' },
  { date: '2025-11-07', title: 'Medical Check-up & Convocation Day', category: 'Event' },
  { date: '2025-11-08', title: 'PTC & ROH (2nd Grading)', category: 'Event' },
  { date: '2025-11-10', title: 'Dental Check-up', category: 'Event' },
  { date: '2025-11-11', title: 'Dental Check-up', category: 'Event' },
  { date: '2025-11-12', title: 'Dental Check-up', category: 'Event' },
  { date: '2025-11-13', title: 'Dental Check-up', category: 'Event' },
  { date: '2025-11-14', title: 'Dental Check-up', category: 'Event' },
  { date: '2025-11-20', title: 'Third Monthly Test', category: 'Exam' },
  { date: '2025-11-21', title: 'Third Monthly Test', category: 'Exam' },
  { date: '2025-11-27', title: '30th Founding Anniversary', category: 'Event' },
  { date: '2025-11-28', title: '30th Founding Anniversary', category: 'Event' },

  // December 2025
  { date: '2025-12-08', title: 'Feast of the Immaculate Conception', category: 'Holiday' },
  { date: '2025-12-16', title: 'Third Periodic Test', category: 'Exam' },
  { date: '2025-12-17', title: 'Third Periodic Test', category: 'Exam' },
  { date: '2025-12-18', title: 'Third Periodic Test', category: 'Exam' },
  { date: '2025-12-19', title: 'Christmas Party', category: 'Event' },
  { date: '2025-12-24', title: 'Christmas Eve', category: 'Holiday' },
  { date: '2025-12-25', title: 'Christmas Day', category: 'Holiday' },
  { date: '2025-12-30', title: 'Rizal Day', category: 'Holiday' },
  { date: '2025-12-31', title: 'Last Day of the Year', category: 'Holiday' },

  // January 2026
  { date: '2026-01-01', title: 'New Year’s Day', category: 'Holiday' },
  { date: '2026-01-05', title: 'Classes Resume', category: 'Event' },
  { date: '2026-01-07', title: 'Pictorial', category: 'Event' },
  { date: '2026-01-08', title: 'Pictorial', category: 'Event' },
  { date: '2026-01-09', title: 'Convocation Day', category: 'Event' },
  { date: '2026-01-10', title: 'PTC & ROH (3rd Grading)', category: 'Event' },
  { date: '2026-01-26', title: 'Fourth Monthly Test', category: 'Exam' },
  { date: '2026-01-27', title: 'Fourth Monthly Test', category: 'Exam' },
  { date: '2026-01-28', title: 'Math & Science Fair', category: 'Event' },
  { date: '2026-01-29', title: 'Math & Science Fair', category: 'Event' },
  { date: '2026-01-30', title: 'Math & Science Fair & PS Wet Day', category: 'Event' },

  // February 2026
  { date: '2026-02-06', title: 'Convocation Day', category: 'Event' },
  { date: '2026-02-06', title: 'Clearance Distribution', category: 'Event' },
  { date: '2026-02-17', title: 'Chinese New Year', category: 'Holiday' },
  { date: '2026-02-23', title: 'Fourth Periodic Test', category: 'Exam' },
  { date: '2026-02-24', title: 'Fourth Periodic Test', category: 'Exam' },
  { date: '2026-02-25', title: 'Fourth Periodic Test', category: 'Exam' },
  { date: '2026-02-26', title: 'LitMus', category: 'Event' },
  { date: '2026-02-27', title: 'LitMus', category: 'Event' },
  { date: '2026-02-28', title: 'JS Prom', category: 'Event' },

  // March 2026
  { date: '2026-03-06', title: 'Career Day', category: 'Event' },
  { date: '2026-03-07', title: 'General Assembly', category: 'Event' },
  { date: '2026-03-11', title: 'Year-End Assessment Test', category: 'Exam' },
  { date: '2026-03-12', title: 'Year-End Assessment Test', category: 'Exam' },
  { date: '2026-03-13', title: 'CEM Exams', category: 'Exam' },
  { date: '2026-03-16', title: 'Practices Begin', category: 'Event' },
  { date: '2026-03-26', title: 'Practices End', category: 'Event' },
  { date: '2026-03-27', title: 'Recognition Day', category: 'Event' },
  { date: '2026-03-30', title: 'Kindergarten Moving Up (AM)', category: 'Event' },
  { date: '2026-03-30', title: 'Grade 6 Graduation (PM)', category: 'Event' },
  { date: '2026-03-31', title: 'Grade 10 Moving Up', category: 'Event' },
  { date: '2026-03-31', title: 'Grade 12 Graduation', category: 'Event' },

  // April 2026
  { date: '2026-04-10', title: 'Releasing of Report Card', category: 'Event' },

  // Philippine National Holidays 2025-2026
  { date: '2025-01-01', title: 'New Year’s Day', category: 'Holiday' },
  { date: '2025-04-09', title: 'Araw ng Kagitingan (Day of Valor)', category: 'Holiday' },
  { date: '2025-04-17', title: 'Maundy Thursday', category: 'Holiday' },
  { date: '2025-04-18', title: 'Good Friday', category: 'Holiday' },
  { date: '2025-05-01', title: 'Labor Day', category: 'Holiday' },
  { date: '2025-06-06', title: 'Eid’l Adha', category: 'Holiday' },
  { date: '2025-06-12', title: 'Independence Day', category: 'Holiday' },
  { date: '2025-08-25', title: 'National Heroes Day', category: 'Holiday' },
  { date: '2025-11-30', title: 'Bonifacio Day', category: 'Holiday' },
  { date: '2025-12-25', title: 'Christmas Day', category: 'Holiday' },
  { date: '2025-12-30', title: 'Rizal Day', category: 'Holiday' },
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
