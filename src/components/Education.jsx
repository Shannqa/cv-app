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
              label={item.labelYears}
              onChange={e => {handler(item.id, e)}}
            />
            <Input
              label={item.labelSchool}
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

export default Education