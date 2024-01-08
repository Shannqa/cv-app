import { useState } from "react";

function FinishedCV( { personal, education, experience } ) {
  console.log(personal);
  return(
    <div className="finished">
      <h2>Preview</h2>
      <div>
        <h3>Personal Information</h3>
        {personal.map(item => (
          <div key={item.id}>
            <div>{item.label}</div>
            <div>{item.value}</div>
          </div>
        ))}
      </div>
      <div>
        <h3>Education</h3>
        {education.map(item => (
          <div key={item.id}>
            <div>
              <div>{item.labelYears}</div>
              <div>{item.valueYears}</div>
            </div>
            <div>
              <div>{item.labelSchool}</div>
              <div>{item.valueSchool}</div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h3>Work Experience</h3>
        {experience.map(item => (
          <div key={item.id}>
          <div>
            <div>{item.labelYears}</div>
            <div>{item.valueYears}</div>
          </div>
          <div>
            <div>{item.labelWork}</div>
            <div>{item.valueWork}</div>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default FinishedCV;