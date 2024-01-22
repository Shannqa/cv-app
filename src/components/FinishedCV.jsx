import { useState } from "react";

function FinishedCV( { personal, education, experience, skills, style, image } ) {
  
  const contactInfo = personal.filter((item) => item.label !== "First Name" && item.label !== "Last Name" );
  
  return(
    <div className="finishedCV">
      <h2>Preview</h2>
      <div id="preview" className={style}>
        <img src={image} className="photo" />
        <h3>{personal[0].value} {personal[1].value}</h3>
        <div class="left">
          <h4>Contact</h4>
          <div className="contact-info">
            {contactInfo.map(item => (
              <div key={item.id}>
                <img src={item.img} />
                <span>{item.value}</span>
              </div>
            ))}
          </div>
          <h4>Skills</h4>
          <div className="skill-info">
            <ul>
              {skills.map(item => (
                <li key={item.id}>{item.value}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="right">
          <h4>Education</h4>
          {education.map((section) => (
            <div className="section" key={section[0].sectionID}>
              <div className="place">
              {section[3].value}
              </div>
              <div className="dates">
              {section[1].value + " - " + section[2].value}
              </div>
              <div className="position">
              {section[4].value}
              </div>
            </div>
          ))}
        
        
          <h4>Work Experience</h4>
          {experience.map((section) => (
            <div className="section" key={section[0].sectionID}>
              <div className="place">
              {section[3].value}
              </div>
              <div className="dates">
              {section[1].value + " - " + section[2].value}
              </div>
              <div className="position">
              {section[4].value}
              </div>
              <div className="details">
              {section[5].value}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default FinishedCV;