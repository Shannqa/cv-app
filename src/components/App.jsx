import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FinishedCV from "./FinishedCV";
import PersonalInfo from "./PersonalInfo";

function App() {
  const personalSection = [
    {
      id: uuidv4(),
      label: "First Name",
      value: "aa",
    },
    {
      id: uuidv4(),
      label: "Last Name",
      value: "bb",
    },
    {
      id: uuidv4(),
      label: "Date of Birth",
      value: "",
    },
    {
      id: uuidv4(),
      label: "Address",
      value: "",
    },
    {
      id: uuidv4(),
      label: "Phone Number",
      value: "",
    },
    {
      id: uuidv4(),
      label: "Email Address",
      value: "",
    }
  ]

  const [personalData, setPersonalData] = useState(personalSection);
  const handlePersonalData = (id, e) => {
    setPersonalData(personalData.map(item => {
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

  return(
    <>
      <PersonalInfo data={personalData} handler={handlePersonalData}/>
      <FinishedCV personal={personalData}/>
    </>
  )
}

export default App;