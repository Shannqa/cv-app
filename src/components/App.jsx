import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import '../styles/App.css'

import FinishedCV from "./FinishedCV";
import PersonalInfo from "./PersonalInfo";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Skills from "./Skills";

import { personal, education, experience, skills } from "../Data.js";

function App() {
  const [personalData, setPersonalData] = useState(personal);
  const [educationData, setEducationData] = useState(education);
  const [experienceData, setExperienceData] = useState(experience);
  const [skillsData, setSkillsData] = useState(skills);
  const [style, setStyle] = useState("style1");

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
          valueYears: e.target.value,
        };
      } else {
        return item;
      }
    }));
  }

  const handleSkillsData = (id, e) => {

  }

  const handleEducationAdd = (e) => {
    e.preventDefault();
    setEducationData(
      [
        ...educationData,
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
      ]
    )
  }

  const handleExperienceAdd = (e) => {
    e.preventDefault();
    setExperienceData(
      [
        ...experienceData,
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
        ]
      ]
    )
  }

  const handleSkillsAdd = (e) => {

  }

  return(
    <>
      <PersonalInfo data={personalData} handler={handlePersonalData}/>
      <Education data={educationData} handler={handleEducationData} handlerAdd={handleEducationAdd}/>
      <WorkExperience data={experienceData} handler={handleExperienceData} handlerAdd={handleExperienceAdd}/>
      <Skills data={skillsData} handler={handleSkillsData} handlerAdd={handleSkillsAdd} />
      <Customization styleSetter={setStyle} styleState={style}/>
      <FinishedCV personal={personalData} education={educationData} experience={experienceData} style={styleState}/>
    </>
  )
}

export default App;