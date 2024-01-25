import { useRef, useState } from "react";
import ReactToPrint, { useReactToPrint } from "react-to-print";
import '../styles/App.css'
import { FinishedCV } from "./FinishedCV";
import PersonalInfo from "./PersonalInfo";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Skills from "./Skills";
import Customization from "./Customization";
import UploadImage from "./UploadImage.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { personal, education, experience, skills, image, style } from "../Data.js";

function App() {
  const [personalData, setPersonalData] = useState(JSON.parse(localStorage.getItem("personalData")) || personal);
  const [educationData, setEducationData] = useState(JSON.parse(localStorage.getItem("educationData")) || education);
  const [experienceData, setExperienceData] = useState(JSON.parse(localStorage.getItem("experienceData")) || experience);
  const [skillsData, setSkillsData] = useState(JSON.parse(localStorage.getItem("skillsData")) || skills);
  const [styleData, setStyle] = useState(JSON.parse(localStorage.getItem("styleData")) || style);
  const [imageData, setImageData] = useState(image);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  });

  return(
    <>
      <Header />
      <PersonalInfo data={personalData} setter={setPersonalData} />
      <Education data={educationData} setter={setEducationData} />
      <WorkExperience data={experienceData} setter={setExperienceData} />
      <Skills data={skillsData} setter={setSkillsData} />
      <UploadImage data={imageData} setter={setImageData} />
      <Customization style={style} setter={setStyle}/>
      <FinishedCV ref={componentRef} personal={personalData} education={educationData} experience={experienceData} skills={skillsData} style={styleData} image={imageData}/>
      <Footer />
      <button onClick={handlePrint}>print</button>
    </>
  )
}

export default App;