import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import '../styles/App.css'
import FinishedCV from "./FinishedCV";
import PersonalInfo from "./PersonalInfo";
import WorkExperience from "./WorkExperience";
import Education from "./Education";

function App() {
  const personalSection = [
    {
      id: uuidv4(),
      label: "First Name",
      value: "aa",
    },
    {
      id: uuidv4(),
      label: "Last Name",
      value: "bb",
    },
    {
      id: uuidv4(),
      label: "Date of Birth",
      value: "",
    },
    {
      id: uuidv4(),
      label: "Address",
      value: "",
    },
    {
      id: uuidv4(),
      label: "Phone Number",
      value: "",
    },
    {
      id: uuidv4(),
      label: "Email Address",
      value: "",
    }
  ]

  const educationSection = [
    {
      id: uuidv4(),
      labelYears: "Years",
      valueYears: "",
      labelSchool: "School",
      valueSchool: ""
    }
  ];

  const experienceSection = [
    {
      id: uuidv4(),
      labelYears: "Years",
      valueYears: "",
      labelWork: "Workplace",
      valueWork: ""
    }
  ];

  const [personalData, setPersonalData] = useState(personalSection);
  const [educationData, setEducationData] = useState(educationSection);
  const [experienceData, setExperienceData] = useState(experienceSection);
  
  const handlePersonalData = (id, e) => {
    setPersonalData(personalData.map(item => {
      if (item.id === id) {
        return {
          ...item,
          value: e.target.value,
        };
      } else {
        return item;
      }
    }));
  }

  const handleEducationData = (id, e) => {
    setEducationData(educationData.map(item => {
      if (item.id === id) {
        return {
          ...item,
          value: e.target.value,
        };
      } else {
        return item;
      }
    }));
  }

  const handleExperienceData = (id, e) => {
    setExperienceData(experienceData.map(item => {
      if (item.id === id) {
        return {
          ...item,
          value: e.target.value,
        };
      } else {
        return item;
      }
    }));
  }

  const handleEducationAdd = (e) => {
    e.preventDefault();
    setEducationData(
      [
        ...educationData,
        {
          id: uuidv4(),
          labelYears: "Years",
          valueYears: "",
          labelSchool: "School",
          valueSchool: ""
        }
      ]
    )
  }

  const handleExperienceAdd = (e) => {
    e.preventDefault();
    setExperienceData(
      [
        ...experienceData,
        {
          id: uuidv4(),
          labelYears: "Years",
          valueYears: "",
          labelWork: "Workplace",
          valueWork: ""
        }
      ]
    )
  }

  return(
    <>
      <PersonalInfo data={personalData} handler={handlePersonalData}/>
      <Education data={educationData} handler={handleEducationData} handlerAdd={handleEducationAdd}/>
      <WorkExperience data={experienceData} handler={handleExperienceData} handlerAdd={handleExperienceAdd}/>
      <FinishedCV personal={personalData}/>
    </>
  )
}

export default App;