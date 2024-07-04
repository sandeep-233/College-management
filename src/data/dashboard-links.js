import { ACCOUNT_TYPE } from "../utils/constants";
export const sidebarLinks = [
  // {
  //   id: 1,
  //   name: "My Profile",
  //   path: "/dashboard/my-profile",
  // },
  // FACULTY
  {
    id: 2,
    name: "Students Details",
    path: "/dashboard/student-info",
    type: ACCOUNT_TYPE.FACULTY,
  },
  {
    id: 22,
    name: "Student Details",
    path: "/dashboard/students-details",
    type: ACCOUNT_TYPE.FACULTY,
  },
  {
    id: 3,
    name: "Add Notes/Notice/PYQ",
    path: "/dashboard/notice",
    type: ACCOUNT_TYPE.FACULTY,
  },
  {
    id: 4,
    name: "Attendence Details",
    path: "/dashboard/attendence-details",
    type: ACCOUNT_TYPE.FACULTY,
  },
  {
    id: 5,
    name: "Add Marks",
    path: "/dashboard/result",
    type: ACCOUNT_TYPE.FACULTY,
  },
  {
    id: 6,
    name: "Students Marks",
    path: "/dashboard/students-marks",
    type: ACCOUNT_TYPE.FACULTY,
  },
  { 
    id: 29,
    name: "Opportunities",
    path: "dashboard/opportunities",
    type: ACCOUNT_TYPE.FACULTY,
  },
  {
    id: 26,
    name: "Queries",
    path: "/dashboard/queries",
    type: ACCOUNT_TYPE.FACULTY,
  },
  // ADMIN
  {
    id: 7,
    name: "Add new Member",
    path: "/dashboard/faculty",
    type: ACCOUNT_TYPE.ADMIN,
  },
  {
    id: 8,
    name: "Add Notes/Notice/PYQ",
    path: "/dashboard/notice",
    type: ACCOUNT_TYPE.ADMIN,
  },
  {
    id: 9,
    name: "Add Marks",
    path: "/dashboard/result",
    type: ACCOUNT_TYPE.ADMIN,
  },
  {
    id: 10,
    name: "Marks Details",
    path: "/dashboard/students-marks",
    type: ACCOUNT_TYPE.ADMIN,
  },
  {
    id: 11,
    name: "Faculties Details",
    path: "/dashboard/faculties-details",
    type: ACCOUNT_TYPE.ADMIN,
  },
  {
    id: 12,
    name: "Students Details",
    path: "/dashboard/student-info",
    type: ACCOUNT_TYPE.ADMIN,
  },
  {
    id: 23,
    name: "Student Details",
    path: "/dashboard/students-details",
    type: ACCOUNT_TYPE.ADMIN,
  },
  // {
  //   id: 13,
  //   name: "Fee Details",
  //   path: "/dashboard/fee",
  //   type: ACCOUNT_TYPE.ADMIN,
  // },
  {
    id: 30,
    name: "Queries",
    path: "/dashboard/queries",
    type: ACCOUNT_TYPE.ADMIN,
  },
  
  // STUDENT
  { 
    id: 14,
    name: "Add Attendence",
    path: "dashboard/add-attendence",
    type: ACCOUNT_TYPE.STUDENT,
  },
  { 
    id: 15,
    name: "My Attendence",
    path: "dashboard/my-attendence",
    type: ACCOUNT_TYPE.STUDENT,
  },
  { 
    id: 16,
    name: "Notes",
    path: "dashboard/notes",
    type: ACCOUNT_TYPE.STUDENT,
  },
  { 
    id: 17,
    name: "Previous Year Questions",
    path: "dashboard/pyq",
    type: ACCOUNT_TYPE.STUDENT,
  },
  { 
    id: 18,
    name: "Notice",
    path: "dashboard/notice",
    type: ACCOUNT_TYPE.STUDENT,
  },
  { 
    id: 19,
    name: "Opportunities",
    path: "dashboard/opportunities",
    type: ACCOUNT_TYPE.STUDENT,
  },
  { 
    id: 20,
    name: "Community",
    path: "dashboard/community",
    type: ACCOUNT_TYPE.STUDENT,
  },
  {
    id: 31,
    name: "Queries",
    path: "/dashboard/queries",
    type: ACCOUNT_TYPE.STUDENT,
  },
  // { 
  //   id: 28,
  //   name: "College Fee",
  //   path: "dashboard/college-fee",
  //   type: ACCOUNT_TYPE.STUDENT,
  // },
  
];
