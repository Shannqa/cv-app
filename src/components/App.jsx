import { useState } from "react";

import '../styles/App.css'

import FinishedCV from "./FinishedCV";
import PersonalInfo from "./PersonalInfo";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Skills from "./Skills";
import Customization from "./Customization";
import UploadImage from "./UploadImage.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

import { personal, education, experience, skills, image } from "../Data.js";

function App() {
  const [personalData, setPersonalData] = useState(personal);
  const [educationData, setEducationData] = useState(education);
  const [experienceData, setExperienceData] = useState(experience);
  const [skillsData, setSkillsData] = useState(skills);
  const [style, setStyle] = useState("style1");
  const [imageURL, setImageURL] = useState("");

  return(
    <>
      <Header />
      <PersonalInfo data={personalData} setter={setPersonalData} />
      <Education data={educationData} setter={setEducationData} />
      <WorkExperience data={experienceData} setter={setExperienceData} />
      <Skills data={skillsData} setter={setSkillsData} />
      <UploadImage data={imageURL} setter={setImageURL} />
      <Customization style={style} setter={setStyle}/>
      <FinishedCV personal={personalData} education={educationData} experience={experienceData} skills={skillsData} style={style} image={imageURL}/>
      <Footer />
    </>
  )
}

export default App;