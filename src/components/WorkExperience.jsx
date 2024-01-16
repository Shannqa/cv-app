import { useState } from "react";
import Input from "./Input";

function WorkExperience( { data, handler, handlerAdd } ) {
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
                onChange={e => {handler(item.id, e)}}
              />
            ))}
          </div>
        ))}
    </div>
    <div className="buttons">
      <button type="submit">Save</button>
      <button onClick={handlerAdd}>Add more</button>
    </div>
    </form>
  )
}

export default WorkExperience