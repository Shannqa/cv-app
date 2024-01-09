import { useState } from "react";
import Input from "./Input";

function Education( { data, handler, handlerAdd } ) {

  return (
    <form id="education-form">
      <h2>Education</h2>
      <div className="fields">
        {data.map((section) => (
          <div class="section">
            <h3>School</h3>
            {section.map((item) => ( 
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

export default Education