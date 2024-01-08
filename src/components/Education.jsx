import { useState } from "react";
import Input from "./Input";

function Education( { data, handler, handlerAdd } ) {
  // let nested = Object.values(data);
  // console.log(nested);
  return (
    <form id="education-form">
      <h2>Education</h2>
      <div className="form">
        <div className="fields">
        {data.map((item) => (
          item.map((item2) => ( 
            <Input 
            key={item2.id}
            id={item2.id}
            label={item2.label}
            placeholder={item2.placeholder}
            onChange={e => {handler(item2.id, e)}}
          />
          ))
      ))}
        </div>
        <button onClick={handlerAdd}>Add more</button>
      </div>
      <button type="submit">Save</button>
    </form>
  )
}

export default Education