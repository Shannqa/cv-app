import { useState } from "react";
import Input from "./Input";

function Education( { data, handler, handlerAdd } ) {
  return (
    <form id="education-form">
      <h2>Education</h2>
      <div className="form">
        <div className="fields">
          {data.map(item => (
            <div key={item.id} className="section">
            <Input
              id={item.id + "y"} 
              label={item.labelYears}
              onChange={e => {handler(item.id, e, "years")}}
            />
            <Input
              id={item.id + "e"} 
              label={item.labelSchool}
              onChange={e => {handler(item.id, e, "exp")}}
            />
             {(data.length > 1) ? <button onClick={handlerRemove}>X</button> : null}
             //or
            {(data.length > 1) && button
          </div>
         
        ))}
        </div>
        <button onClick={handlerAdd}>Add more</button>
      </div>
      <button type="submit">Save</button>
    </form>
  )
}

export default Education