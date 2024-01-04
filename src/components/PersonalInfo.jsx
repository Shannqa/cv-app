import { useState } from "react";
import Input from "./Input";

function PersonalInfo() {
  const fields = [
    {
      id: "name",
      label: "Name",
      type: "text", 
      value: "vv"
    },
    {
      id: "phone",
      label: "Phone",
      type: "text", 
      value: "vv"
    }
    // name: "",
    // phone: "",
    // address: "",
    // dateOfBirth: ""
  ]


  const [value, setValue] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
  }

// function onChange(event) {
//   setValue(event.target.value);
// }

  return (
    <form onSubmit={handleSubmit}>
      {fields.map(item => (
        <Input 
          key={item.id}
          label={item.label}
        />
      ))}
      
      
      {/* <label for="phone">Phone:</label>
      <input id="phone"></input> */}
      <div>{value}</div>
      <button type="submit">Send</button>
    </form>
  )

}

export default PersonalInfo