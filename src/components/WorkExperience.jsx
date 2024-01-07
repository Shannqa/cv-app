import { useState } from "react";
import Input from "./Input";

function WorkExperience( { data, handler, handlerAdd } ) {
  return (
    <form id="experience-form">
      <h2>Work Experience</h2>
      <div className="form">
        <div className="fields">
        {data.map(item => (
                    <div key={item.id} className="section">
                    <Input
                      id={item.id + "y"} 
                      label={item.labelYears} 
                      onChange={e => {handler(item.id, e)}}
                    />
                    <Input
                      id={item.id + "e"} 
                      label={item.labelWork}
                      onChange={e => {handler(item.id, e)}}
                    />
                    </div>
        ))}
      </div>
      <button onClick={handlerAdd}>Add more</button>
      </div>
      <button type="submit">Save</button>
    </form>
  )
}

export default WorkExperience