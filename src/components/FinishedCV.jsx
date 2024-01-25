import { useState } from "react";
import React from "react";

export const FinishedCV = React.forwardRef(( { personal, education, experience, skills, style, image }, ref ) => {
  
  const contactInfo = personal.filter((item) => item.label !== "First Name" && item.label !== "Last Name" );
  
  function setLocalStorage(storageKey, storedData) {
    localStorage.setItem(storageKey, JSON.stringify(storedData));
  }

  function handleSave() {
    setLocalStorage("personalData", personal);
    setLocalStorage("educationData", education);
    setLocalStorage("experienceData", experience);
    setLocalStorage("skillsData", skills);
    setLocalStorage("styleData", style);
  }

  function handleDelete() {
    localStorage.clear();
  }

  return(
    <div className="finishedCV">
      <h2>Preview</h2>
      <button onClick={handleSave} className="add-btn">Save draft</button> 
      <button onClick={handleDelete} className="add-btn">Delete draft</button> 
      <button className="add-btn">Download PDF</button>
      
      <div id="preview" className={style} ref={ref}>
        <div className="left">
        <img src={image || "./src/assets/face_3_FILL1_wght400_GRAD0_opsz24.svg"} className="photo" />
          <h4>Contact</h4>
          <div className="contact-info">
            <div>
              <img src={personal[2].img} />
              <span>{personal[2].value || "City"}</span>
            </div>
            <div>
              <img src={personal[3].img} />
              <span>{personal[3].value || "+123456789"}</span>
            </div>
            <div>
              <img src={personal[4].img} />
              <span>{personal[4].value || "example@email.com"}</span>
            </div>
            <div>
              <img src={personal[5].img} />
              <span>{personal[5].value || "website.com"}</span>
            </div>
          </div>
          <h4>Skills</h4>
          <div className="skill-info">
              {skills.map(item => (
                <div key={item.id}>
                  <img src="src/assets/keyboard_double_arrow_right_FILL0_wght400_GRAD0_opsz24.svg" />
                  <span>{item.value || "Your skill"}</span>
                </div>
              ))}

          </div>
        </div>
        
        <div className="right">
          <h3>{personal[0].value || "Firstname"} {personal[1].value || "Lastname"}</h3>
          <h4>Education</h4>
          {education.map((section) => (
            <div className="section" key={section[0].sectionID}>
              <div className="place">
              {section[3].value || "Example University"}
              </div>
              <div className="dates">
              {(section[1].value || "2015-01") + " - " + (section[2].value || "2020-01")}
              </div>
              <div className="position">
              {section[4].value || "Example Degree"}
              </div>
            </div>
          ))}
        
        
          <h4>Work Experience</h4>
          {experience.map((section) => (
            <div className="section" key={section[0].sectionID}>
              <div className="place">
              {section[3].value || "Example Company"}
              </div>
              <div className="dates">
              {(section[1].value || "2020-01") + " - " + (section[2].value || "2024-01")}
              </div>

              <div className="position">
              {section[4].value || "Example Position"}
              </div>
              <div className="details">
              {section[5].value || "Example Details"}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
})
