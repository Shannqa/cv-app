import { useState } from "react";
import Input from "./Input";

function PersonalInfo( { data, handler } ) {

  function handleSubmit(id, event) {
    event.preventDefault();
    const newData = 0;

  }

// function onChange(event) {
//   setValue(event.target.value);
// }

  return (
    <form onSubmit={handleSubmit}>
      {data.map(item => (
        <Input 
          key={item.id}
          label={item.label}
          onChange={e => {handler(item.id, e)}}
        />
      ))}
      <button type="submit">Send</button>
    </form>
  )

}

export default PersonalInfo