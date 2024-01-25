import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Input from "./Input";
import DeleteBtn from "./DeleteBtn";

function Skills( { data, setter } ) {
  
  const handleSkillsData = (id, e) => {
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
  
  const handleSkillsAdd = (e) => {
    e.preventDefault();
    setter(
      [
        ...data,
        {
          id: uuidv4(),
          label: "Skill",
          value: "",
          placeholder: "Answering phones",
        }
      ]
    )
  }
  
  function handleDelete(id, e) {
    e.preventDefault();
    setter(data.filter((item) => item.id !== id))
  }

  return(
     <form id="skills-form">
      <h2>Skills</h2>
      <div className="form">
        <div className="fields">
          <h3>List your skills</h3>
        {data.map(item => (
          <div className="skill-line" key={item.id + "line"}>
            <Input 
              key={item.id}
              id={item.id}
              label={item.label}
              value={item.value}
              placeholder={item.placeholder}
              onChange={e => {handleSkillsData(item.id, e)}}
            />
            <DeleteBtn handler={e => {handleDelete(item.id, e)}}
            />
          </div>
        ))}
        </div>
      </div>
      <button className="add-btn" onClick={handleSkillsAdd}>Add more</button>
    </form>
  )
}

export default Skills