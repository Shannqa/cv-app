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
    label: "City",
    value: "",
    placeholder: "London",
    img: "location_on_FILL0_wght400_GRAD0_opsz24.svg"
  },
  {
    id: uuidv4(),
    label: "Phone Number",
    value: "",
    placeholder: "+65245563123",
    img: "smartphone_FILL0_wght400_GRAD0_opsz24.svg"
  },
  {
    id: uuidv4(),
    label: "Email Address",
    value: "",
    placeholder: "example@email.com",
    img: "mail_FILL0_wght400_GRAD0_opsz24.svg"
  },
  {
    id: uuidv4(),
    label: "Website",
    value: "",
    placeholder: "janedoe.example.com",
    img: "language_FILL0_wght400_GRAD0_opsz24.svg"
  },
];

const education = [
  [
    {
      sectionID: uuidv4(),
    },
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
  [
    {
      sectionID: uuidv4(),
    },
    {
      id: uuidv4(),
      label: "Start Date",
      value: "",
      placeholder: "2020-05",
    },
    {
      id: uuidv4(),
      label: "End Date",
      value: "",
      placeholder: "currently",
    },
    {
      id: uuidv4(),
      label: "Workplace",
      value: "",
      placeholder: "Easy Fix Corporation",
    },
    {
      id: uuidv4(),
      label: "Position (optional)",
      value: "",
      placeholder: "Assistant Manager",
    },
    {
      id: uuidv4(),
      label: "Details (optional)",
      value: "",
      placeholder:
        "Responsibilities include managing people and holding important meetings",
    },
  ],
];

const skills = [
  {
    id: uuidv4(),
    label: "Skill",
    value: "",
    placeholder: "Answering phones",
  },
];

export { personal, education, experience, skills };