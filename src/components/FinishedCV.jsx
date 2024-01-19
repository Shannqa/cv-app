import { useState } from "react";

function FinishedCV( { personal, education, experience, skills, style } ) {
  
  const contactInfo = personal.filter((item) => item.label !== "First Name" && item.label !== "Last Name" );
  
  return(
    <div className="finishedCV">
      <h2>Preview</h2>
      <div id="preview" className={style}>
        <h3>{personal[0].value} {personal[1].value}</h3>
        <h4>Contact</h4>
        <div className="contact-info">
          {contactInfo.map(item => (
            <div key={item.id}>
              <img src={item.img} />
              <span>{item.value}</span>
            </div>
          ))}
        </div>
        <div>
          <h4>Education</h4>
          {education.map((section) => (
            <div className="finishedSection">
              {section.map((item) => ( 
                <div key={item.id}>
                  <span>{item.label}</span>
                  <span>{item.value}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div>
          <h4>Work Experience</h4>
          {experience.map((section) => (
            <div className="finishedSection">
              {section.map((item) => ( 
                <div key={item.id}>
                  <span>{item.label}</span>
                  <span>{item.value}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
        <h4>Skills</h4>
        <div className="skill-info">
          {skills.map(item => (
            <div key={item.id}>
              <span>{item.label}</span>
              <span>{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FinishedCV;