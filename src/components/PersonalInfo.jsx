import { useState } from "react";
import Input from "./Input";

function PersonalInfo( { data, handler } ) {

  //onSubmit={handleSubmit}
  return (
    <form id="personal-form">
      <h2>Personal Information</h2>
      <div className="form">
        <div className="fields">
        {data.map(item => (
          <Input 
            key={item.id}
            label={item.label}
            onChange={e => {handler(item.id, e)}}
          />
        ))}
        </div>
      </div>
      <button type="submit">Save</button>
    </form>
  )
}

export default PersonalInfo