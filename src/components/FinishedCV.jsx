import { useState } from "react";

function FinishedCV( { personal } ) {
  console.log(personal);
  return(
    <>
    <h2>Your CV</h2>
    {personal.map(item => (
      <div key={item.id}>
        <div>{item.label}</div>
        <div>{item.value}</div>
      </div>
    ))}</>
  )
}

export default FinishedCV;