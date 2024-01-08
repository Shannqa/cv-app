import { v4 as uuidv4 } from "uuid";

const personal = [
  {
    id: uuidv4(),
    label: "First Name",
    value: "",
    placeholder: "Enter your first name",
  },
  {
    id: uuidv4(),
    label: "Last Name",
    value: "",
    placeholder: "Enter your last name",
  },
  {
    id: uuidv4(),
    label: "Date of Birth (YYYY-MM-DD)",
    value: "",
    placeholder: "Enter your date of birth: YYYY-MM-DD",
  },
  {
    id: uuidv4(),
    label: "Address",
    value: "",
    placeholder: "Enter your street name and number",
  },
  {
    id: uuidv4(),
    label: "Address (cont.)",
    value: "",
    placeholder: "Enter your zip code and city",
  },
  {
    id: uuidv4(),
    label: "Phone Number",
    value: "",
    placeholder: "Enter your phone number",
  },
  {
    id: uuidv4(),
    label: "Email Address",
    value: "Enter your email address",
  },
];

const education = [
  [
    {
      id: uuidv4(),
      label: "Start Date (year, year and month or full date)",
      value: "",
      placeholder: "Enter start date, either YYYY, YYYY-MM, or YYYY-MM-DD",
    },
    {
      id: uuidv4(),
      label: "End Date (year, year and month or full date)",
      value: "",
      placeholder: "Enter end date, either YYYY, YYYY-MM, or YYYY-MM-DD",
    },
    {
      id: uuidv4(),
      label: "School",
      value: "",
      placeholder: "",
    },
    {
      id: uuidv4(),
      label: "Degree (optional)",
      value: "Enter your degree",
      placeholder: "",
    },
  ],
];

const experience = [
  {
    dateStart: {
      id: uuidv4(),
      label: "Start Date (year, year and month or full date)",
      value: "",
      placeholder: "Enter start date, either YYYY, YYYY-MM, or YYYY-MM-DD",
    },
    dateEnd: {
      id: uuidv4(),
      label: "End Date (year, year and month or full date)",
      value: "",
      placeholder: "Enter end date, either YYYY, YYYY-MM, or YYYY-MM-DD",
    },
    workplace: {
      id: uuidv4(),
      label: "Workplace",
      value: "",
      placeholder: "",
    },
    position: {
      id: uuidv4(),
      label: "Position (optional)",
      value: "",
      placeholder: "",
    },
    position: {
      id: uuidv4(),
      label: "Degree (optional)",
      value: "",
      placeholder: "",
    },
  },
];

export { personal, education, experience };
