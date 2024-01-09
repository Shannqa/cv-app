import { useState } from "react";
import Input from "./Input";

function Skills() {
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
            onChange={e => {handler(item.id, e)}}
          />
        ))}
        </div>
      </div>
      <button type="submit">Save</button>
    </form>
    )
}

export default Skills