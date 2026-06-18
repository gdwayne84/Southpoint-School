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
  {
    label: 'Study',
    children: [
      { label: 'Admissions', path: '/admissions' },
      { label: 'Academics', path: '/academics' },
    ]
  },
  {
    label: 'Campus Life',
    children: [
      { label: 'Student Life', path: '/student-life' },
      { label: 'Parent Resources', path: '/parent-resources' },
      { label: 'School Calendar', path: '/calendar' },
    ]
  },
  { label: 'Contact Us', path: '/contact' },
  {
    label: 'Student Portal',
    path: 'https://student-portal.southpointschool.edu.ph/',
    isExternal: true,
    isHighlight: true
  }
];

export const RESOURCE_FILES: ResourceFile[] = [
  {
    name: 'Student Handbook 2025-2026',
    description: 'The official handbook covering school policies, code of conduct, and academic guidelines.',
    url: 'docs/Student-Handbook-s2024.pdf',
  },
  {
    name: 'School Calendar 2026-2027',
    description: 'Key dates for the academic year, including holidays, examination periods, and school events.',
    url: 'docs/School-Calendar-2026-2027.pdf',
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
  // June 2026
  { date: '2026-06-01', title: 'Students\' Orientation & ID Photo Session', category: 'Event' },
  { date: '2026-06-07', title: 'Parents\' Orientation', category: 'Event' },
  { date: '2026-06-08', title: 'Regular Classes Begin', category: 'Event' },
  { date: '2026-06-12', title: 'Independence Day', category: 'Holiday' },
  { date: '2026-06-29', title: 'First Summative Test', category: 'Exam' },
  { date: '2026-06-30', title: 'First Summative Test', category: 'Exam' },

  // July 2026
  { date: '2026-07-01', title: 'Nutrition Month Activities', category: 'Event' },
  { date: '2026-07-02', title: 'Nutrition Month Activities', category: 'Event' },
  { date: '2026-07-03', title: 'Nutrition Month Culminating Activity', category: 'Event' },
  { date: '2026-07-10', title: 'First Convocation - SHS', category: 'Event' },
  { date: '2026-07-10', title: 'SC Filing of Candidacy', category: 'Event' },
  { date: '2026-07-17', title: 'Student Council Election', category: 'Event' },
  { date: '2026-07-27', title: 'Medical Check-up', category: 'Event' },
  { date: '2026-07-28', title: 'Review', category: 'Event' },
  { date: '2026-07-29', title: 'Dental Check-up', category: 'Event' },
  { date: '2026-07-30', title: 'Second Summative Test', category: 'Exam' },
  { date: '2026-07-31', title: 'Second Summative Test', category: 'Exam' },

  // August 2026
  { date: '2026-08-01', title: 'SC Leadership Training', category: 'Event' },
  { date: '2026-08-07', title: 'Second Convocation - Grade 10', category: 'Event' },
  { date: '2026-08-21', title: 'Ninoy Aquino Day', category: 'Holiday' },
  { date: '2026-08-24', title: 'Review', category: 'Event' },
  { date: '2026-08-25', title: 'Review', category: 'Event' },
  { date: '2026-08-26', title: 'Term 1 Examinations', category: 'Exam' },
  { date: '2026-08-27', title: 'Term 1 Examinations', category: 'Exam' },
  { date: '2026-08-31', title: 'National Heroes Day', category: 'Holiday' },

  // September 2026
  { date: '2026-09-02', title: 'Practices for Buwan ng Wika', category: 'Event' },
  { date: '2026-09-03', title: 'Practices for Buwan ng Wika', category: 'Event' },
  { date: '2026-09-04', title: 'Buwan ng Wika Culminating Activity', category: 'Event' },
  { date: '2026-09-11', title: 'Third Convocation - Grade 9', category: 'Event' },
  { date: '2026-09-11', title: 'First Reading of Honors and PTC', category: 'Event' },
  { date: '2026-09-28', title: 'Review', category: 'Event' },
  { date: '2026-09-29', title: 'Third Summative Test', category: 'Exam' },
  { date: '2026-09-30', title: 'Third Summative Test', category: 'Exam' },

  // October 2026
  { date: '2026-10-01', title: 'Environmental Awareness Activity', category: 'Event' },
  { date: '2026-10-02', title: 'Teachers\' Day Celebration', category: 'Event' },
  { date: '2026-10-09', title: 'Fourth Convocation - Grade 8', category: 'Event' },
  { date: '2026-10-26', title: 'Fourth Summative Test', category: 'Exam' },
  { date: '2026-10-27', title: 'Fourth Summative Test', category: 'Exam' },
  { date: '2026-10-28', title: 'Practices for UN Culminating Activity', category: 'Event' },
  { date: '2026-10-29', title: 'Practices for UN Culminating Activity', category: 'Event' },
  { date: '2026-10-30', title: 'UN Celebration Culminating Activity', category: 'Event' },

  // November 2026
  { date: '2026-11-02', title: 'All Souls\' Day', category: 'Holiday' },
  { date: '2026-11-02', title: 'Evaluation of Annual Operational Plan (AOP)', category: 'Event' },
  { date: '2026-11-03', title: 'Evaluation of Annual Operational Plan (AOP)', category: 'Event' },
  { date: '2026-11-04', title: 'Team Color Meeting for the Founding Anniversary', category: 'Event' },
  { date: '2026-11-04', title: 'Shirt Sizing - T. Margie', category: 'Event' },
  { date: '2026-11-06', title: 'Fifth Convocation - Grade 7', category: 'Event' },
  { date: '2026-11-23', title: 'Review', category: 'Event' },
  { date: '2026-11-24', title: 'Review', category: 'Event' },
  { date: '2026-11-25', title: 'Fifth Summative Test', category: 'Exam' },
  { date: '2026-11-26', title: 'Fifth Summative Test', category: 'Exam' },
  { date: '2026-11-27', title: 'Practices for the Founding Anniversary', category: 'Event' },
  { date: '2026-11-30', title: 'Bonifacio Day', category: 'Holiday' },

  // December 2026
  { date: '2026-12-01', title: 'Practices for the Founding Anniversary', category: 'Event' },
  { date: '2026-12-02', title: 'Practices for the Founding Anniversary', category: 'Event' },
  { date: '2026-12-03', title: 'Founding Anniversary', category: 'Event' },
  { date: '2026-12-04', title: 'Founding Anniversary', category: 'Event' },
  { date: '2026-12-05', title: 'Founding Anniversary', category: 'Event' },
  { date: '2026-12-07', title: 'SPS Rest Day', category: 'Event' },
  { date: '2026-12-08', title: 'Special Non-Working Holiday', category: 'Holiday' },
  { date: '2026-12-14', title: 'Review', category: 'Event' },
  { date: '2026-12-15', title: 'Review', category: 'Event' },
  { date: '2026-12-16', title: 'Term 2 Examinations', category: 'Exam' },
  { date: '2026-12-17', title: 'Term 2 Examinations', category: 'Exam' },
  { date: '2026-12-18', title: 'Christmas Party', category: 'Event' },
  { date: '2026-12-25', title: 'Christmas Day', category: 'Holiday' },
  { date: '2026-12-30', title: 'Rizal Day', category: 'Holiday' },
  { date: '2026-12-31', title: 'Last Day of the Year', category: 'Holiday' },

  // January 2027
  { date: '2027-01-01', title: 'New Year\'s Day', category: 'Holiday' },
  { date: '2027-01-06', title: 'Classes Resume', category: 'Event' },
  { date: '2027-01-07', title: 'Pictorial for Graduating and Moving-up Students', category: 'Event' },
  { date: '2027-01-08', title: 'Pictorial for Graduating and Moving-up Students', category: 'Event' },
  { date: '2027-01-08', title: 'Second Reading of Honors and PTC', category: 'Event' },
  { date: '2027-01-15', title: 'Sixth Convocation - SHS', category: 'Event' },
  { date: '2027-01-25', title: 'Review', category: 'Event' },
  { date: '2027-01-26', title: 'Sixth Summative Test', category: 'Exam' },
  { date: '2027-01-27', title: 'Sixth Summative Test', category: 'Exam' },
  { date: '2027-01-28', title: 'Math and Science Fair', category: 'Event' },
  { date: '2027-01-29', title: 'Math and Science Fair', category: 'Event' },

  // February 2027
  { date: '2027-02-05', title: 'Seventh Convocation - Grade 10', category: 'Event' },
  { date: '2027-02-22', title: 'Review', category: 'Event' },
  { date: '2027-02-23', title: 'Seventh Summative Test', category: 'Exam' },
  { date: '2027-02-24', title: 'Seventh Summative Test', category: 'Exam' },
  { date: '2027-02-25', title: 'Literary-Musical Fest', category: 'Event' },
  { date: '2027-02-26', title: 'Literary-Musical Fest', category: 'Event' },
  { date: '2027-02-27', title: 'Promenade - Grade 10 & SHS', category: 'Event' },

  // March 2027
  { date: '2027-03-05', title: 'Career Day', category: 'Event' },
  { date: '2027-03-08', title: 'Clearance and Review', category: 'Event' },
  { date: '2027-03-09', title: 'Clearance and Review', category: 'Event' },
  { date: '2027-03-10', title: 'Clearance and Review', category: 'Event' },
  { date: '2027-03-11', title: 'Clearance and Review', category: 'Event' },
  { date: '2027-03-12', title: 'Clearance and Review', category: 'Event' },
  { date: '2027-03-15', title: 'Term 3 Examinations', category: 'Exam' },
  { date: '2027-03-16', title: 'Term 3 Examinations', category: 'Exam' },
  { date: '2027-03-17', title: 'CEM Achievement Test', category: 'Exam' },
  { date: '2027-03-18', title: 'Teachers\' Preparations', category: 'Event' },
  { date: '2027-03-19', title: 'Teachers\' Preparations', category: 'Event' },
  { date: '2027-03-22', title: 'EOSY Rites Practices', category: 'Event' },
  { date: '2027-03-23', title: 'EOSY Rites Practices', category: 'Event' },
  { date: '2027-03-24', title: 'EOSY Rites Practices', category: 'Event' },
  { date: '2027-03-25', title: 'Maundy Thursday', category: 'Holiday' },
  { date: '2027-03-26', title: 'Good Friday', category: 'Holiday' },
  { date: '2027-03-29', title: 'Recognition Day', category: 'Event' },
  { date: '2027-03-30', title: 'Kindergarten Moving Up (AM)', category: 'Event' },
  { date: '2027-03-30', title: 'Grade 6 Graduation (PM)', category: 'Event' },
  { date: '2027-03-31', title: 'Grade 10 Completion Rites (AM)', category: 'Event' },
  { date: '2027-03-31', title: 'Grade 12 Graduation (PM)', category: 'Event' },
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
