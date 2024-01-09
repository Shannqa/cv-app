import { v4 as uuidv4 } from "uuid";

const personal = [
  {
    id: uuidv4(),
    label: "First Name",
    value: "",
    placeholder: "Jane",
  },
  {
    id: uuidv4(),
    label: "Last Name",
    value: "",
    placeholder: "Doe",
  },
  {
    id: uuidv4(),
    label: "Date of Birth (YYYY-MM-DD)",
    value: "",
    placeholder: "1985-03-25",
  },
  {
    id: uuidv4(),
    label: "Street Name and Number",
    value: "",
    placeholder: "Apple St. 10/15",
  },
  {
    id: uuidv4(),
    label: "Zip Code and City",
    value: "",
    placeholder: "1638-283 Fruitland",
  },
  {
    id: uuidv4(),
    label: "Phone Number",
    value: "",
    placeholder: "+65245563123",
  },
  {
    id: uuidv4(),
    label: "Email Address",
    value: "example@email.com",
  },
];

const education = [
  [
    {
      id: uuidv4(),
      label: "Start Date",
      value: "",
      placeholder: "2016",
    },
    {
      id: uuidv4(),
      label: "End Date",
      value: "",
      placeholder: "2020",
    },
    {
      id: uuidv4(),
      label: "School",
      value: "",
      placeholder: "Example University",
    },
    {
      id: uuidv4(),
      label: "Degree (optional)",
      value: "",
      placeholder: "Computer Science",
    },
  ],
];

const experience = [
  {
    dateStart: {
      id: uuidv4(),
      label: "Start Date",
      value: "",
      placeholder: "2020-05",
    },
    dateEnd: {
      id: uuidv4(),
      label: "End Date",
      value: "",
      placeholder: "currently",
    },
    workplace: {
      id: uuidv4(),
      label: "Workplace",
      value: "",
      placeholder: "Easy Fix Corporation",
    },
    position: {
      id: uuidv4(),
      label: "Position (optional)",
      value: "",
      placeholder: "Assistant Manager",
    },
    details: {
      id: uuidv4(),
      label: "Details (optional)",
      value: "",
      placeholder: "Responsibilities include managing people and holding important meetings",
    },
  },
];

const skills = [
  {
    id: uuidv4(),
    label: "Skill",
    value: "",
    placeholder: "Answering phones",
  },
]

export { personal, education, experience };
