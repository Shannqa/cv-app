import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import '../styles/App.css'

import FinishedCV from "./FinishedCV";
import PersonalInfo from "./PersonalInfo";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import { personal, education, experience } from "../Data.js";

function App() {
  const [personalData, setPersonalData] = useState(personal);
  const [educationData, setEducationData] = useState(education);
  const [experienceData, setExperienceData] = useState(experience);
  
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

  const handleEducationData = (id, e, type) => {
    setEducationData(educationData.map(item => {
      if (item.id === id && type === "years") {
        return {
          ...item,
          valueYears: e.target.value,
        };
      } else if (item.id === id && type === "exp") {
        return {
          ...item,
          valueSchool: e.target.value,
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
          valueYears: e.target.value,
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
      <FinishedCV personal={personalData} education={educationData} experience={experienceData}/>
    </>
  )
}

export default App;