import { useState } from "react";
import Input from "./Input";

function Education( { data, setter } ) {
  
const handleEducationData = (id, e) => {
    setter(data.map(item => {
      if (item.id === id) {
        return {
          ...item,
          value: e.target.value,
        };
      } else {
        return item;
      }
    }));
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
  e.preventDefault;
  setter(data.filter((section) => section[0].sectionID !== id))
}

  return(
    <form id="education-form">
      <h2>Education</h2>
      <div className="fields">
        {data.map((section) => (
          <div key={section[0].sectionID} className="section">
            <h3>School</h3>
            {section.map((item) => ( 
              // do not render the object containing only the section's ID
              item.sectionID ? null :
              <><Input 
                key={item.id}
                id={item.id}
                label={item.label}
                placeholder={item.placeholder}
                onChange={e => {handleEducationData(item.id, e)}}
              />
              <DeleteBtn 
                onClick={e => {handleDelete(item.sectionID, e)}}
              />
              </>
            ))}
          </div>
        ))}
      </div>
      <div className="buttons">
        <button onClick={handleEducationAdd}>Add more</button>
      </div>
    </form>
  )
}

export default Education