import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Input from "./Input";
import DeleteBtn from "./DeleteBtn";

function Education( { data, setter } ) {
  
  const handleEducationData = (id, e) => {
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
  
  const handleEducationAdd = (e) => {
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

function handleDelete(id, e) {
  e.preventDefault();
  setter(data.filter((section) => section[0].sectionID !== id))
}

  return(
    <form id="education-form">
      <h2>Education</h2>
      <div className="fields">
        {data.map((section) => (
          <div key={section[0].sectionID} className="section">
            <h3>School</h3>
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
                onChange={e => {handleEducationData(item.id, e)}}
              />

            ))}
          </div>
        ))}
      </div>
      <button className="add-btn" onClick={handleEducationAdd}>Add more</button>
    </form>
  )
}

export default Education