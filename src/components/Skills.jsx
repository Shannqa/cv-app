import { useState } from "react";
import Input from "./Input";

function Skills( { data, setter } ) {
  
  const handleSkillsData = (id, e) => {

  }
  
  const handleSkillsAdd = (e) => {

  }
  
  return(
     <form id="skills-form">
      <h2>Skills</h2>
      <div className="form">
        <div className="fields">
        {data.map(item => (
          <Input 
            key={item.id}
            id={item.id}
            label={item.label}
            placeholder={item.placeholder}
            onChange={e => {handleSkillsData(item.id, e)}}
          />
        ))}
        </div>
      </div>
      <div className="buttons">
        <button onClick={handleExperienceAdd}>Add more</button>
      </div>
    </form>
    )
}

export default Skills