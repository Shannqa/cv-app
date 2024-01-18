import { useState } from "react";

import '../styles/App.css'

import FinishedCV from "./FinishedCV";
import PersonalInfo from "./PersonalInfo";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Skills from "./Skills";
import Customization from "./Customization";

import { personal, education, experience, skills } from "../Data.js";

function App() {
  const [personalData, setPersonalData] = useState(personal);
  const [educationData, setEducationData] = useState(education);
  const [experienceData, setExperienceData] = useState(experience);
  const [skillsData, setSkillsData] = useState(skills);
  const [style, setStyle] = useState("style1");

  return(
    <>
      <PersonalInfo data={personalData} setter={setPersonalData} />
      <Education data={educationData} setter={setEducationData} />
      <WorkExperience data={experienceData} setter={setExperienceData} />
      <Skills data={skillsData} setter={setSkillsData} />
      <Customization style={style} setter={setStyle}/>
      {/* <FinishedCV personal={personalData} education={educationData} experience={experienceData} style={style}/> */}
    </>
  )
}

export default App;