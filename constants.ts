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
    name: 'Student Handbook 2025-2026',
    description: 'The official handbook covering school policies, code of conduct, and academic guidelines.',
    url: 'docs/Student-Handbook-s2024.pdf',
  },
  {
    name: 'School Calendar 2025-2026',
    description: 'Key dates for the academic year, including holidays, examination periods, and school events.',
    url: 'docs/School-Calendar-2025-2026.pdf',
  },
  {
    name: 'Enrollment Policy Form',
    description: 'The official form for new and returning student enrollment.',
    url: 'docs/EPA-s2025.pdf',
  },
  {
    name: "Learner's Medical History Form",
    description: "A required form for detailing student medical history and emergency contact information.",
    url: "docs/Learner-Medical-History-Form.pdf",
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
  { date: '2025-06-06', title: 'Eid\'l Adha', category: 'Holiday' },
  { date: '2025-06-12', title: 'Independence Day', category: 'Holiday' },
  { date: '2025-06-16', title: 'Students\' Orientation (Half Day)', category: 'Event' },
  { date: '2025-06-22', title: 'Parents\' Orientation', category: 'Event' },
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
  { date: '2025-08-21', title: 'First Periodic Test', category: 'Exam' },
  { date: '2025-08-21', title: 'Ninoy Aquino Day', category: 'Holiday' },
  { date: '2025-08-22', title: 'First Periodic Test', category: 'Exam' },
  { date: '2025-08-25', title: 'National Heroes Day', category: 'Holiday' },
  { date: '2025-08-29', title: 'Buwan ng Wika Culminating Activity', category: 'Event' },
  // September 2025
  { date: '2025-09-05', title: 'Convocation Day', category: 'Event' },
  { date: '2025-09-06', title: 'PTC & ROH (1st Grading)', category: 'Event' },
  { date: '2025-09-18', title: 'Second Monthly Test', category: 'Exam' },
  { date: '2025-09-19', title: 'Second Monthly Test', category: 'Exam' },
  { date: '2025-09-29', title: 'Environmental Awareness', category: 'Event' },
  { date: '2025-09-30', title: 'Environmental Awareness', category: 'Event' },
  // October 2025
  { date: '2025-10-03', title: 'Teachers\' Day Celebration', category: 'Event' },
  { date: '2025-10-10', title: 'Convocation Day', category: 'Event' },
  { date: '2025-10-22', title: 'Second Periodic Test', category: 'Exam' },
  { date: '2025-10-23', title: 'Second Periodic Test', category: 'Exam' },
  { date: '2025-10-24', title: 'Second Periodic Test', category: 'Exam' },
  { date: '2025-10-31', title: 'UN Culmination', category: 'Event' },
  { date: '2025-10-31', title: 'All Saints\' Eve', category: 'Holiday' },
  // November 2025
  { date: '2025-11-01', title: 'All Saints\' Day', category: 'Holiday' },
  { date: '2025-11-04', title: 'Medical Check-up', category: 'Event' },
  { date: '2025-11-05', title: 'Medical Check-up', category: 'Event' },
  { date: '2025-11-06', title: 'Medical Check-up', category: 'Event' },
  { date: '2025-11-07', title: 'Medical Check-up', category: 'Event' },
  { date: '2025-11-07', title: 'Convocation Day', category: 'Event' },
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
  { date: '2025-11-30', title: 'Bonifacio Day', category: 'Holiday' },
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
  { date: '2026-01-01', title: 'New Year\'s Day', category: 'Holiday' },
  { date: '2026-01-05', title: 'Classes Resume', category: 'Event' },
  { date: '2026-01-07', title: 'Pictorial', category: 'Event' },
  { date: '2026-01-08', title: 'Pictorial', category: 'Event' },
  { date: '2026-01-09', title: 'Convocation Day', category: 'Event' },
  { date: '2026-01-10', title: 'PTC & ROH (3rd Grading)', category: 'Event' },
  { date: '2026-01-26', title: 'Fourth Monthly Test', category: 'Exam' },
  { date: '2026-01-27', title: 'Fourth Monthly Test', category: 'Exam' },
  { date: '2026-01-28', title: 'Math & Science Fair', category: 'Event' },
  { date: '2026-01-29', title: 'Math & Science Fair', category: 'Event' },
  { date: '2026-01-30', title: 'Math & Science Fair', category: 'Event' },
  { date: '2026-01-30', title: 'PS Wet Day', category: 'Event' },
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
  { date: '2026-03-16', title: 'Practices', category: 'Event' },
  { date: '2026-03-17', title: 'Practices', category: 'Event' },
  { date: '2026-03-18', title: 'Practices', category: 'Event' },
  { date: '2026-03-19', title: 'Practices', category: 'Event' },
  { date: '2026-03-20', title: 'Practices', category: 'Event' },
  { date: '2026-03-21', title: 'Practices', category: 'Event' },
  { date: '2026-03-22', title: 'Practices', category: 'Event' },
  { date: '2026-03-23', title: 'Practices', category: 'Event' },
  { date: '2026-03-24', title: 'Practices', category: 'Event' },
  { date: '2026-03-25', title: 'Practices', category: 'Event' },
  { date: '2026-03-26', title: 'Practices', category: 'Event' },
  { date: '2026-03-27', title: 'Recognition Day', category: 'Event' },
  { date: '2026-03-30', title: 'Kindergarten Moving Up (AM)', category: 'Event' },
  { date: '2026-03-30', title: 'Grade 6 Graduation (PM)', category: 'Event' },
  { date: '2026-03-31', title: 'Grade 10 Moving Up', category: 'Event' },
  { date: '2026-03-31', title: 'Grade 12 Graduation', category: 'Event' },
  // April 2026
  { date: '2026-04-10', title: 'Releasing of Report Card', category: 'Event' },
];


export const FEE_SCHEDULES: FeeSchedule[] = [
    {
    id: "prek",
    level: "Pre-Kindergarten",
    fees: [
      { label: "Tuition Fees", value: "₱28,183.10" },
      {
        label: "Miscellaneous",
        value: "₱25,485.91",
        details: [
          { label: "Athletics", value: "₱481.80" },
          { label: "Energy Fee", value: "₱3,985.20" },
          { label: "Facilities Improvements", value: "₱3,894.22" },
          { label: "Home Room PTA", value: "₱0.00" },
          { label: "I.D. Picture", value: "₱245.30" },
          { label: "Instructional Materials", value: "₱4,513.85" },
          { label: "Insurance", value: "₱112.20" },
          { label: "Kindergarten Supplies", value: "₱5,042.29" },
          { label: "Library", value: "₱0.00" },
          { label: "Medical-Dental & Supply", value: "₱1,102.31" },
          { label: "Membership Fee (Institutional)", value: "₱306.90" },
          { label: "Registration", value: "₱2,420.00" },
          { label: "School Publication", value: "₱754.60" },
          { label: "Student Services", value: "₱2,464.44" },
          { label: "Class Picture", value: "₱162.80" }
        ]
      },
      { label: "Total School Fees", value: "₱53,669.01", isBold: true },
      {
        label: "View Enrollment Fees",
        value: "",
        details: [
          { label: "Module", value: "₱3,000.00" },
          { label: "Reading Program", value: "₱0.00" },
          { label: "Math Textbook", value: "₱1,800.00" },
          { label: "Upon Enrollment", value: "₱9,800.00", isBold: true },
          { label: "Monthly Dues", value: "₱5,408.00", isBold: true },
        ]
      },
    ],
    requirements: ["Entrance Test", "PSA Birth Certificate (Photocopy)", "Fill out Enrolment Form or Online Enrolment"],
    discount: "A 3% discount on tuition fees is given for one-time full payment of the entire year's matriculation made on or before May 15, 2026."
  },
  {
    id: "kinder",
    level: "Kinder",
    fees: [
      { label: "Tuition Fees", value: "₱26,915.18" },
      {
        label: "Miscellaneous",
        value: "₱28,625.19",
        details: [
          { label: "Athletics", value: "₱1,011.78" },
          { label: "Computer Fee (u-maint.cost)", value: "₱0.00" },
          { label: "Diagnostic Test", value: "₱775.61" },
          { label: "Energy Fee", value: "₱3,063.72" },
          { label: "Facilities Improvements", value: "₱4,043.82" },
          { label: "Graduation", value: "₱2,144.12" },
          { label: "Guidance Fee", value: "₱0.00" },
          { label: "I.D. Picture", value: "₱269.83" },
          { label: "Instructional Materials", value: "₱3,621.53" },
          { label: "Insurance", value: "₱123.42" },
          { label: "Kindergarten Supplies", value: "₱6,514.64" },
          { label: "Library", value: "₱919.60" },
          { label: "Medical-Dental & Supply", value: "₱816.75" },
          { label: "Membership Fee (AASHPI, DAPRISA)", value: "₱337.59" },
          { label: "Registration", value: "₱2,654.74" },
          { label: "Science Laboratory", value: "₱0.00" },
          { label: "School Publication", value: "₱225.06" },
          { label: "Scouting/Retreat/Camps", value: "₱0.00" },
          { label: "Student Services", value: "₱1,571.79" },
          { label: "Class Picture", value: "₱163.35" },
          { label: "Year Book Picture", value: "₱367.84" },
        ]
      },
      { label: "Total School Fees", value: "₱55,540.37", isBold: true },
      {
        label: "View Enrollment Fees",
        value: "",
        details: [
          { label: "Module", value: "₱3,000.00" },
          { label: "Reading Program", value: "₱2,500.00" },
          { label: "Math Textbook", value: "₱1,800.00" },
          { label: "Upon Enrollment", value: "₱12,300.00", isBold: true },
          { label: "Monthly Dues", value: "₱5,616.00", isBold: true },
        ]
      },
    ],
    requirements: ["Entrance Test", "PSA Birth Certificate (Photocopy)", "Fill out Enrolment Form or Online Enrolment"],
    discount: "A 3% discount on tuition fees is given for one-time full payment of the entire year's matriculation made on or before May 15, 2026."
  },
  {
    id: "grade1",
    level: "Grade 1",
    fees: [
      { label: "Tuition Fees", value: "₱25,603.50" },
      {
        label: "Miscellaneous",
        value: "₱23,728.21",
        details: [
          { label: "Athletics", value: "₱1,011.56" },
          { label: "Computer Fee (u-maint.cost)", value: "₱2,706.88" },
          { label: "Diagnostic Test", value: "₱775.61" },
          { label: "Energy Fee", value: "₱2,042.48" },
          { label: "Facilities Improvements", value: "₱4,043.82" },
          { label: "Graduation", value: "₱0.00" },
          { label: "Guidance Fee", value: "₱450.12" },
          { label: "I.D. Picture", value: "₱269.83" },
          { label: "Instructional Materials", value: "₱3,369.85" },
          { label: "Insurance", value: "₱123.42" },
          { label: "Kindergarten Supplies", value: "₱0.00" },
          { label: "Library", value: "₱919.60" },
          { label: "Medical-Dental & Supply", value: "₱816.75" },
          { label: "Membership Fee (AASHPI, DAPRISA)", value: "₱337.59" },
          { label: "Registration", value: "₱2,654.74" },
          { label: "Science Laboratory", value: "₱1,429.01" },
          { label: "School Publication", value: "₱225.06" },
          { label: "Scouting/Retreat/Camps", value: "₱816.75" },
          { label: "Student Services", value: "₱1,571.79" },
          { label: "Class Picture", value: "₱163.35" },
          { label: "Year Book Picture", value: "₱0.00" },
        ]
      },
      { label: "Total School Fees", value: "₱49,331.71", isBold: true },
      {
        label: "View Enrollment Fees",
        value: "",
        details: [
          { label: "Module", value: "₱3,000.00" },
          { label: "Reading Program", value: "₱2,500.00" },
          { label: "Math Textbook", value: "₱1,800.00" },
          { label: "Upon Enrollment", value: "₱12,300.00", isBold: true },
          { label: "Monthly Dues", value: "₱4,926.00", isBold: true },
        ]
      },
    ],
    requirements: ["Entrance Test", "PSA Birth Certificate (Photocopy)", "Kindergarten – ECCD Summative Assessment", "Report Card", "Fill out Enrolment Form or Online Enrolment"],
    discount: "A 3% discount on tuition fees is given for one-time full payment of the entire year's matriculation made on or before May 15, 2026."
  },
  {
    id: "grade2",
    level: "Grade 2",
    fees: [
      { label: "Tuition Fees", value: "₱25,603.50" },
      {
        label: "Miscellaneous",
        value: "₱23,728.21",
        details: [
          { label: "Athletics", value: "₱1,011.56" },
          { label: "Computer Fee (u-maint.cost)", value: "₱2,706.88" },
          { label: "Diagnostic Test", value: "₱775.61" },
          { label: "Energy Fee", value: "₱2,042.48" },
          { label: "Facilities Improvements", value: "₱4,043.82" },
          { label: "Graduation", value: "₱0.00" },
          { label: "Guidance Fee", value: "₱450.12" },
          { label: "I.D. Picture", value: "₱269.83" },
          { label: "Instructional Materials", value: "₱3,369.85" },
          { label: "Insurance", value: "₱123.42" },
          { label: "Kindergarten Supplies", value: "₱0.00" },
          { label: "Library", value: "₱919.60" },
          { label: "Medical-Dental & Supply", value: "₱816.75" },
          { label: "Membership Fee (AASHPI, DAPRISA)", value: "₱337.59" },
          { label: "Registration", value: "₱2,654.74" },
          { label: "Science Laboratory", value: "₱1,429.01" },
          { label: "School Publication", value: "₱225.06" },
          { label: "Scouting/Retreat/Camps", value: "₱816.75" },
          { label: "Student Services", value: "₱1,571.79" },
          { label: "Class Picture", value: "₱163.35" },
          { label: "Year Book Picture", value: "₱0.00" },
        ]
      },
      { label: "Total School Fees", value: "₱49,331.71", isBold: true },
      {
        label: "View Enrollment Fees",
        value: "",
        details: [
          { label: "Module", value: "₱3,000.00" },
          { label: "Reading Program", value: "₱2,500.00" },
          { label: "Math Textbook", value: "₱1,800.00" },
          { label: "Upon Enrollment", value: "₱12,300.00", isBold: true },
          { label: "Monthly Dues", value: "₱4,926.00", isBold: true },
        ]
      },
    ],
    requirements: ["Entrance Test (for Transferees only)", "PSA Birth Certificate (Photocopy)", "Report Card", "Good Moral Certificate (for Transferees)", "Fill out Enrolment Form or Online Enrolment"],
    discount: "A 3% discount on tuition fees is given for one-time full payment of the entire year's matriculation made on or before May 15, 2026."
  },
  {
    id: "grade3",
    level: "Grade 3",
    fees: [
      { label: "Tuition Fees", value: "₱25,603.50" },
      {
        label: "Miscellaneous",
        value: "₱25,155.64",
        details: [
          { label: "Athletics", value: "₱1,011.56" },
          { label: "Computer Fee (u-maint.cost)", value: "₱2,706.88" },
          { label: "Diagnostic Test", value: "₱775.61" },
          { label: "Energy Fee", value: "₱3,985.20" },
          { label: "Facilities Improvements", value: "₱3,860.01" },
          { label: "Graduation", value: "₱0.00" },
          { label: "Guidance Fee", value: "₱450.12" },
          { label: "I.D. Picture", value: "₱269.83" },
          { label: "Instructional Materials", value: "₱3,216.68" },
          { label: "Insurance", value: "₱123.42" },
          { label: "Kindergarten Supplies", value: "₱0.00" },
          { label: "Library", value: "₱836.00" },
          { label: "Medical-Dental & Supply", value: "₱816.75" },
          { label: "Membership Fee (AASHPI, DAPRISA)", value: "₱337.59" },
          { label: "Registration", value: "₱2,654.74" },
          { label: "Science Laboratory", value: "₱1,429.01" },
          { label: "School Publication", value: "₱204.60" },
          { label: "Scouting/Retreat/Camps", value: "₱742.50" },
          { label: "Student Services", value: "₱1,571.79" },
          { label: "Class Picture", value: "₱163.35" },
          { label: "Year Book Picture", value: "₱0.00" },
        ]
      },
      { label: "Total School Fees", value: "₱50,759.13", isBold: true },
      {
        label: "View Enrollment Fees",
        value: "",
        details: [
          { label: "Module", value: "₱3,000.00" },
          { label: "Reading Program", value: "₱2,500.00" },
          { label: "Math Textbook", value: "₱1,800.00" },
          { label: "Upon Enrollment", value: "₱12,300.00", isBold: true },
          { label: "Monthly Dues", value: "₱5,085.00", isBold: true },
        ]
      },
    ],
    requirements: ["Entrance Test (for Transferees only)", "PSA Birth Certificate (Photocopy)", "Report Card", "Good Moral Certificate (for Transferees)", "Fill out Enrolment Form or Online Enrolment"],
    discount: "A 3% discount on tuition fees is given for one-time full payment of the entire year's matriculation made on or before May 15, 2026."
  },

  {
  id: "grade4",
  level: "Grade 4",
  fees: [
    { label: "Tuition Fees", value: "₱26,772.16" },
    {
      label: "Miscellaneous",
      value: "₱29,743.34",
      details: [
        { label: "Athletics", value: "₱1,011.56" },
        { label: "Computer Fee (u-maint.cost)", value: "₱2,706.88" },
        { label: "Internet Fee", value: "₱4,083.75" },
        { label: "Diagnostic Test", value: "₱775.61" },
        { label: "Energy Fee", value: "₱2,042.48" },
        { label: "Facilities Improvements", value: "₱4,043.82" },
        { label: "Graduation", value: "₱0.00" },
        { label: "Guidance Fee", value: "₱450.12" },
        { label: "Home Economics", value: "₱1,483.46" },
        { label: "I.D. Picture", value: "₱269.83" },
        { label: "Instructional Materials", value: "₱3,818.76" },
        { label: "Insurance", value: "₱123.42" },
        { label: "Library", value: "₱919.60" },
        { label: "Medical-Dental & Supply", value: "₱816.75" },
        { label: "Membership Fee (AASHPI, DAPRISA)", value: "₱337.59" },
        { label: "Registration", value: "₱2,654.74" },
        { label: "Science Laboratory", value: "₱1,429.01" },
        { label: "School Publication", value: "₱225.06" },
        { label: "Scouting/Retreat/Camps", value: "₱816.75" },
        { label: "Student Services", value: "₱1,570.80" },
        { label: "Class Picture", value: "₱163.35" },
        { label: "Year Book Picture", value: "₱0.00" }
      ]
    },
    { label: "Total School Fees", value: "₱56,515.50", isBold: true },
    {
      label: "View Enrollment Fees",
      value: "",
      details: [
        { label: "Module", value: "₱2,780.00" },
        { label: "Reading Program", value: "₱2,500.00" },
        { label: "Math Textbook", value: "₱1,800.00" },
        { label: "Upon Enrollment", value: "₱12,080.00", isBold: true },
        { label: "Monthly Dues", value: "₱5,724.00", isBold: true },
      ]
    },
  ],
  requirements: ["Entrance Test (for Transferees only)", "PSA Birth Certificate (Photocopy)", "Report Card", "Good Moral Certificate (for Transferees)", "Fill out Enrolment Form or Online Enrolment"],
  discount: "A 3% discount on tuition fees is given for one-time full payment of the entire year's matriculation made on or before May 15, 2026."
},

{
  id: "grade5",
  level: "Grade 5",
  fees: [
    { label: "Tuition Fees", value: "₱26,772.16" },
    {
      label: "Miscellaneous",
      value: "₱29,669.82",
      details: [
        { label: "Athletics", value: "₱1,011.56" },
        { label: "Computer Fee (u-maint.cost)", value: "₱2,706.88" },
        { label: "Internet Fee", value: "₱4,083.75" },
        { label: "Diagnostic Test", value: "₱775.61" },
        { label: "Energy Fee", value: "₱2,042.48" },
        { label: "Facilities Improvements", value: "₱3,970.30" },
        { label: "Graduation", value: "₱0.00" },
        { label: "Guidance Fee", value: "₱450.12" },
        { label: "Home Economics", value: "₱1,483.46" },
        { label: "I.D. Picture", value: "₱269.83" },
        { label: "Instructional Materials", value: "₱3,818.76" },
        { label: "Insurance", value: "₱123.42" },
        { label: "Library", value: "₱919.60" },
        { label: "Medical-Dental & Supply", value: "₱816.75" },
        { label: "Membership Fee (AASHPI, DAPRISA)", value: "₱337.59" },
        { label: "Registration", value: "₱2,654.74" },
        { label: "Science Laboratory", value: "₱1,429.01" },
        { label: "School Publication", value: "₱225.06" },
        { label: "Scouting/Retreat/Camps", value: "₱816.75" },
        { label: "Student Services", value: "₱1,570.80" },
        { label: "Class Picture", value: "₱163.35" },
        { label: "Year Book Picture", value: "₱0.00" }
      ]
    },
    { label: "Total School Fees", value: "₱56,441.98", isBold: true },
    {
      label: "View Enrollment Fees",
      value: "",
      details: [
        { label: "Module", value: "₱2,780.00" },
        { label: "Reading Program", value: "₱2,500.00" },
        { label: "Math Textbook", value: "₱1,800.00" },
        { label: "Upon Enrollment", value: "₱12,080.00", isBold: true },
        { label: "Monthly Dues", value: "₱5,716.00", isBold: true },
      ]
    },
  ],
  requirements: ["Entrance Test (for Transferees only)", "PSA Birth Certificate (Photocopy)", "Report Card", "Good Moral Certificate (for Transferees)", "Fill out Enrolment Form or Online Enrolment"],
  discount: "A 3% discount on tuition fees is given for one-time full payment of the entire year's matriculation made on or before May 15, 2026."
},

{
  id: "grade6",
  level: "Grade 6",
  fees: [
    { label: "Tuition Fees", value: "₱26,772.16" },
    {
      label: "Miscellaneous",
      value: "₱34,180.38",
      details: [
        { label: "Athletics", value: "₱1,011.56" },
        { label: "Computer Fee (u-maint.cost)", value: "₱2,706.88" },
        { label: "Internet Fee", value: "₱4,083.75" },
        { label: "Diagnostic Test", value: "₱775.61" },
        { label: "Energy Fee", value: "₱3,985.20" },
        { label: "Facilities Improvements", value: "₱3,970.30" },
        { label: "Graduation", value: "₱2,200.00" },
        { label: "Guidance Fee", value: "₱450.12" },
        { label: "Home Economics", value: "₱1,483.46" },
        { label: "I.D. Picture", value: "₱269.83" },
        { label: "Instructional Materials", value: "₱3,818.76" },
        { label: "Insurance", value: "₱123.42" },
        { label: "Library", value: "₱919.60" },
        { label: "Medical-Dental & Supply", value: "₱816.75" },
        { label: "Membership Fee (AASHPI, DAPRISA)", value: "₱337.59" },
        { label: "Registration", value: "₱2,654.74" },
        { label: "Science Laboratory", value: "₱1,429.01" },
        { label: "School Publication", value: "₱225.06" },
        { label: "Scouting/Retreat/Camps", value: "₱816.75" },
        { label: "Student Services", value: "₱1,570.80" },
        { label: "Class Picture", value: "₱163.35" },
        { label: "Year Book Picture", value: "₱367.84" }
      ]
    },
    { label: "Total School Fees", value: "₱60,952.54", isBold: true },
    {
      label: "View Enrollment Fees",
      value: "",
      details: [
        { label: "Module", value: "₱2,780.00" },
        { label: "Reading Program", value: "₱2,500.00" },
        { label: "Math Textbook", value: "₱1,800.00" },
        { label: "Upon Enrollment", value: "₱12,080.00", isBold: true },
        { label: "Monthly Dues", value: "₱6,217.00", isBold: true },
      ]
    },
  ],
  requirements: ["Entrance Test (for Transferees only)", "PSA Birth Certificate (Photocopy)", "Report Card", "Good Moral Certificate (for Transferees)", "Fill out Enrolment Form or Online Enrolment"],
  discount: "A 3% discount on tuition fees is given for one-time full payment of the entire year's matriculation made on or before May 15, 2026."
},

{
  id: "grade7",
  level: "Grade 7",
  fees: [
    { label: "Tuition Fees", value: "₱36,270.00" },
    {
      label: "Miscellaneous",
      value: "₱30,129.44",
      details: [
        { label: "Athletics", value: "₱1,124.09" },
        { label: "Computer Fee (u-maint.cost)", value: "₱2,695.88" },
        { label: "Internet Fee", value: "₱4,083.75" },
        { label: "Diagnostic Test", value: "₱775.61" },
        { label: "Energy Fee", value: "₱2,042.48" },
        { label: "Facilities Improvements", value: "₱4,083.75" },
        { label: "Graduation", value: "₱0.00" },
        { label: "Guidance Fee", value: "₱450.12" },
        { label: "Home Economics", value: "₱1,483.46" },
        { label: "I.D. Picture", value: "₱269.83" },
        { label: "Instructional Materials", value: "₱3,982.11" },
        { label: "Insurance", value: "₱123.75" },
        { label: "Library", value: "₱1,018.82" },
        { label: "Medical-Dental & Supply", value: "₱816.86" },
        { label: "Membership Fee (AASHPI, DAPRISA)", value: "₱337.59" },
        { label: "Registration", value: "₱2,654.74" },
        { label: "Science Laboratory", value: "₱1,429.01" },
        { label: "School Publication", value: "₱306.13" },
        { label: "Scouting/Retreat/Camps", value: "₱613.47" },
        { label: "Student Services", value: "₱1,633.50" },
        { label: "Class Picture", value: "₱204.49" },
        { label: "Year Book Picture", value: "₱0.00" },
      ]
    },
    { label: "Total School Fees", value: "₱66,399.44", isBold: true },
    {
      label: "View Enrollment Fees",
      value: "",
      details: [
        { label: "Module", value: "₱3,080.00" },
        { label: "Reading Program", value: "₱2,500.00" },
        { label: "Upon Enrollment", value: "₱10,580.00", isBold: true },
        { label: "Monthly Dues", value: "₱6,823.00", isBold: true },
      ]
    },
  ],
   requirements: ["Entrance Test (for Transferees only)", "Interview by the Principal/Coordinator (for Transferees only)", "PSA Birth Certificate (Photocopy)", "Report Card", "Good Moral Certificate (for Transferees)", "Fill out Enrolment Form or Online Enrolment"],
  discount: "A 3% discount on tuition fees is given for one-time full payment of the entire year's matriculation made on or before May 15, 2026."
},

{
  id: "grade8",
  level: "Grade 8",
  fees: [
    { label: "Tuition Fees", value: "₱36,270.00" },
    {
      label: "Miscellaneous",
      value: "₱30,129.44",
      details: [
        { label: "Athletics", value: "₱1,124.09" },
        { label: "Computer Fee (u-maint.cost)", value: "₱2,695.88" },
        { label: "Internet Fee", value: "₱4,083.75" },
        { label: "Diagnostic Test", value: "₱775.61" },
        { label: "Energy Fee", value: "₱2,042.48" },
        { label: "Facilities Improvements", value: "₱4,083.75" },
        { label: "Graduation", value: "₱0.00" },
        { label: "Guidance Fee", value: "₱450.12" },
        { label: "Home Economics", value: "₱1,483.46" },
        { label: "I.D. Picture", value: "₱269.83" },
        { label: "Instructional Materials", value: "₱3,982.11" },
        { label: "Insurance", value: "₱123.75" },
        { label: "Library", value: "₱1,018.82" },
        { label: "Medical-Dental & Supply", value: "₱816.86" },
        { label: "Membership Fee (AASHPI, DAPRISA)", value: "₱337.59" },
        { label: "Registration", value: "₱2,654.74" },
        { label: "Science Laboratory", value: "₱1,429.01" },
        { label: "School Publication", value: "₱306.13" },
        { label: "Scouting/Retreat/Camps", value: "₱613.47" },
        { label: "Student Services", value: "₱1,633.50" },
        { label: "Class Picture", value: "₱204.49" },
        { label: "Year Book Picture", value: "₱0.00" },
      ]
    },
    { label: "Total School Fees", value: "₱66,399.44", isBold: true },
    {
      label: "View Enrollment Fees",
      value: "",
      details: [
        { label: "Module", value: "₱3,080.00" },
        { label: "Reading Program", value: "₱2,500.00" },
        { label: "Upon Enrollment", value: "₱10,580.00", isBold: true },
        { label: "Monthly Dues", value: "₱6,823.00", isBold: true },
      ]
    },
  ],
   requirements: ["Entrance Test (for Transferees only)", "Interview by the Principal/Coordinator (for Transferees only)", "PSA Birth Certificate (Photocopy)", "Report Card", "Good Moral Certificate (for Transferees)", "Fill out Enrolment Form or Online Enrolment"],
  discount: "A 3% discount on tuition fees is given for one-time full payment of the entire year's matriculation made on or before May 15, 2026."
},

{
  id: "grade9",
  level: "Grade 9",
  fees: [
    { label: "Tuition Fees", value: "₱36,270.00" },
    {
      label: "Miscellaneous",
      value: "₱30,129.44",
      details: [
        { label: "Athletics", value: "₱1,124.09" },
        { label: "Computer Fee (u-maint.cost)", value: "₱2,695.88" },
        { label: "Internet Fee", value: "₱4,083.75" },
        { label: "Diagnostic Test", value: "₱775.61" },
        { label: "Energy Fee", value: "₱2,042.48" },
        { label: "Facilities Improvements", value: "₱4,083.75" },
        { label: "Graduation", value: "₱0.00" },
        { label: "Guidance Fee", value: "₱450.12" },
        { label: "Home Economics", value: "₱1,483.46" },
        { label: "I.D. Picture", value: "₱269.83" },
        { label: "Instructional Materials", value: "₱3,982.11" },
        { label: "Insurance", value: "₱123.75" },
        { label: "Library", value: "₱1,018.82" },
        { label: "Medical-Dental & Supply", value: "₱816.86" },
        { label: "Membership Fee (AASHPI, DAPRISA)", value: "₱337.59" },
        { label: "Registration", value: "₱2,654.74" },
        { label: "Science Laboratory", value: "₱1,429.01" },
        { label: "School Publication", value: "₱306.13" },
        { label: "Scouting/Retreat/Camps", value: "₱613.47" },
        { label: "Student Services", value: "₱1,633.50" },
        { label: "Class Picture", value: "₱204.49" },
        { label: "Year Book Picture", value: "₱0.00" },
      ]
    },
    { label: "Total School Fees", value: "₱66,399.44", isBold: true },
    {
      label: "View Enrollment Fees",
      value: "",
      details: [
        { label: "Module", value: "₱3,080.00" },
        { label: "Reading Program", value: "₱2,500.00" },
        { label: "Upon Enrollment", value: "₱10,580.00", isBold: true },
        { label: "Monthly Dues", value: "₱6,823.00", isBold: true },
      ]
    },
  ],
   requirements: ["Entrance Test (for Transferees only)", "Interview by the Principal/Coordinator (for Transferees only)", "PSA Birth Certificate (Photocopy)", "Report Card", "Good Moral Certificate (for Transferees)", "Fill out Enrolment Form or Online Enrolment"],
  discount: "A 3% discount on tuition fees is given for one-time full payment of the entire year's matriculation made on or before May 15, 2026."
},

{
  id: "grade10",
  level: "Grade 10",
  fees: [
    { label: "Tuition Fees", value: "₱36,270.00" },
    {
      label: "Miscellaneous",
      value: "₱32,607.96",
      details: [
        { label: "Athletics", value: "₱1,124.09" },
        { label: "Computer Fee (u-maint.cost)", value: "₱2,695.88" },
        { label: "Internet Fee", value: "₱4,083.75" },
        { label: "Diagnostic Test", value: "₱775.61" },
        { label: "Energy Fee", value: "₱2,042.48" },
        { label: "Facilities Improvements", value: "₱4,083.75" },
        { label: "Graduation", value: "₱2,144.12" },
        { label: "Guidance Fee", value: "₱450.12" },
        { label: "Home Economics", value: "₱1,483.46" },
        { label: "I.D. Picture", value: "₱269.83" },
        { label: "Instructional Materials", value: "₱3,982.11" },
        { label: "Insurance", value: "₱123.75" },
        { label: "Library", value: "₱1,018.82" },
        { label: "Medical-Dental & Supply", value: "₱816.86" },
        { label: "Membership Fee (AASHPI, DAPRISA)", value: "₱337.59" },
        { label: "Registration", value: "₱2,654.74" },
        { label: "Science Laboratory", value: "₱1,429.01" },
        { label: "School Publication", value: "₱306.13" },
        { label: "Scouting/Retreat/Camps", value: "₱613.47" },
        { label: "Student Services", value: "₱1,633.50" },
        { label: "Class Picture", value: "₱204.49" },
        { label: "Year Book Picture", value: "₱334.40" },
      ]
    },
    { label: "Total School Fees", value: "₱68,877.96", isBold: true },
    {
      label: "View Enrollment Fees",
      value: "",
      details: [
        { label: "Module", value: "₱3,080.00" },
        { label: "Reading Program", value: "₱2,500.00" },
        { label: "Upon Enrollment", value: "₱10,580.00", isBold: true },
        { label: "Monthly Dues", value: "₱7,098.00", isBold: true },
      ]
    },
  ],
   requirements: ["Entrance Test (for Transferees only)", "Interview by the Principal/Coordinator (for Transferees only)", "PSA Birth Certificate (Photocopy)", "Report Card", "Good Moral Certificate (for Transferees)", "Fill out Enrolment Form or Online Enrolment"],
  discount: "A 3% discount on tuition fees is given for one-time full payment of the entire year's matriculation made on or before May 15, 2026."
},

{
  id: "grade11",
  level: "Grade 11",
  fees: [
    { label: "Tuition Fees", value: "₱42,597.15" },
    {
      label: "Miscellaneous",
      value: "₱24,307.61",
      details: [
        { label: "Athletics", value: "₱1,021.00" },
        { label: "Computer Fee (u-maint.cost)", value: "₱2,228.00" },
        { label: "Diagnostic Test", value: "₱761.51" },
        { label: "Energy Fee", value: "₱3,985.20" },
        { label: "Facilities Improvements", value: "₱4,084.30" },
        { label: "Guidance Fee", value: "₱449.90" },
        { label: "I.D. Picture", value: "₱245.30" },
        { label: "Instructional Materials", value: "₱3,620.00" },
        { label: "Insurance", value: "₱123.20" },
        { label: "Library", value: "₱929.00" },
        { label: "Medical-Dental & Supply", value: "₱817.30" },
        { label: "Membership Fee (AASHPI, DAPRISA)", value: "₱306.90" },
        { label: "Registration", value: "₱2,413.00" },
        { label: "Science Laboratory", value: "₱1,299.00" },
        { label: "School Publication", value: "₱306.90" },
        { label: "Student Services", value: "₱1,485.00" },
        { label: "Class Picture", value: "₱232.10" }
      ]
    },
    { label: "Total School Fees", value: "₱66,904.76", isBold: true },
    {
      label: "View Enrollment Fees",
      value: "",
      details: [
        { label: "Module", value: "₱3,080.00" },
        { label: "Reading Program", value: "₱2,500.00" },
        { label: "Upon Enrollment", value: "₱10,580.00", isBold: true },
        { label: "Monthly Dues", value: "₱6,879.00", isBold: true },
      ]
    },
  ],
   requirements: ["Entrance Test (for Transferees only)", "Interview by the Principal/Coordinator (for Transferees only)", "PSA Birth Certificate (Photocopy)", "Report Card", "Good Moral Certificate (for Transferees)", "Fill out Enrolment Form or Online Enrolment"],
  discount: "A 3% discount on tuition fees is given for one-time full payment of the entire year's matriculation made on or before May 15, 2026."
},

{
  id: "grade12",
  level: "Grade 12",
  fees: [
    { label: "Tuition Fees", value: "₱46,856.80" },
    {
      label: "Miscellaneous",
      value: "₱27,204.00",
      details: [
        { label: "Athletics", value: "₱1,021.00" },
        { label: "Computer Fee (u-maint.cost)", value: "₱2,228.00" },
        { label: "Energy Fee", value: "₱3,985.20" },
        { label: "Facilities Improvements", value: "₱4,084.30" },
        { label: "Graduation", value: "₱2,200.00" },
        { label: "Guidance Fee", value: "₱449.90" },
        { label: "I.D. Picture", value: "₱245.30" },
        { label: "Instructional Materials", value: "₱3,982.00" },
        { label: "Insurance", value: "₱123.20" },
        { label: "Library", value: "₱929.00" },
        { label: "Medical-Dental & Supply", value: "₱817.30" },
        { label: "Membership Fee (AASHPI, DAPRISA)", value: "₱306.90" },
        { label: "Registration", value: "₱2,413.00" },
        { label: "Science Laboratory", value: "₱1,299.00" },
        { label: "School Publication", value: "₱306.90" },
        { label: "Student Services", value: "₱1,485.00" },
        { label: "Class Picture", value: "₱232.10" },
        { label: "Year Book Picture", value: "₱334.40" }
      ]
    },
    { label: "Total School Fees", value: "₱74,060.80", isBold: true },
    {
      label: "View Enrollment Fees",
      value: "",
      details: [
        { label: "Module", value: "₱3,080.00" },
        { label: "Reading Program", value: "₱2,500.00" },
        { label: "Upon Enrollment", value: "₱10,580.00", isBold: true },
        { label: "Monthly Dues", value: "₱7,674.00", isBold: true },
      ]
    },
  ],
   requirements: ["Entrance Test (for Transferees only)", "Interview by the Principal/Coordinator (for Transferees only)", "PSA Birth Certificate (Photocopy)", "Report Card", "Good Moral Certificate (for Transferees)", "Fill out Enrolment Form or Online Enrolment"],
  discount: "A 3% discount on tuition fees is given for one-time full payment of the entire year's matriculation made on or before May 15, 2026."
}

];
