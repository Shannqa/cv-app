import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Input from "./Input";
import DeleteBtn from "./DeleteBtn";

function WorkExperience( { data, setter } ) {
  
  const handleExperienceData = (id, e) => {
    setter(data.map(section => {
      console.log(section);
      return section.map((item) => { // remember to return in nested arrays!
        console.log(item);
        if (item.id === id) {
          return {
            ...item,
            value: e.target.value,
          };
        } else {
          return item;
        }
      })
    }))
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

  function handleDelete(id, e) {
    e.preventDefault;
    setter(data.filter((section) => section[0].sectionID !== id))
  }
  
  return (
    <form id="experience-form">
      <h2>Work Experience</h2>
      <div className="fields">
        {data.map((section) => (
          <div key={section[0].sectionID} className="section">
            <h3>Job</h3>
            <DeleteBtn handler={e => {handleDelete(section[0].sectionID, e)}}
              />
            {section.map((item) => ( 
              // do not render the object containing only the section's ID
              item.sectionID ? null :
              <Input 
                key={item.id}
                id={item.id}
                label={item.label}
                value={item.value}
                placeholder={item.placeholder}
                onChange={e => {handleExperienceData(item.id, e)}}
              />
            ))}
          </div>
        ))}
      </div>
      <button className="add-btn" onClick={handleExperienceAdd}>Add more</button>
    </form>
  )
}

export default WorkExperience