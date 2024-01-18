import { useState } from "react";
import Input from "./Input";

function PersonalInfo( { data, setter } ) {

  const handlePersonalData = (id, e) => {
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

  return (
    <form id="personal-form">
      <h2>Personal Information</h2>
      <div className="fields">
        {data.map(item => (
          <Input 
            key={item.id}
            id={item.id}
            label={item.label}
            placeholder={item.placeholder}
            onChange={e => {handlePersonalData(item.id, e)}}
          />
        ))}
      </div>
    </form>
  )
}

export default PersonalInfo