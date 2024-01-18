import { useState } from "react";
import Input from "./Input";

function WorkExperience( { data, setter } ) {
  
  const handleExperienceData = (id, e) => {
    setter(data.map(item => {
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

  
  const handleExperienceAdd = (e) => {
    e.preventDefault();
    setter(
      [
        ...data,
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

  return (
    <form id="experience-form">
      <h2>Work Experience</h2>
      <div className="fields">
        {data.map((section) => (
          <div key={section[0].sectionID} className="section">
            <h3>Job</h3>
            {section.map((item) => ( 
              // do not render the object containing only the section's ID
              item.sectionID ? null :
              <Input 
                key={item.id}
                id={item.id}
                label={item.label}
                placeholder={item.placeholder}
                onChange={e => {handleExperienceData(item.id, e)}}
              />
            ))}
          </div>
        ))}
    </div>
    <div className="buttons">
      <button type="submit">Save</button>
      <button onClick={handleExperienceAdd}>Add more</button>
    </div>
    </form>
  )
}

export default WorkExperience