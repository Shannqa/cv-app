import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function UploadImage( { data, setter }) {
  
  function handleUpload(e) {
    setter(URL.createObjectURL(e.target.files[0]));
  }
  
  return(
    <div>
      <h3>Upload your photo</h3>
      <input type="file" onChange={handleUpload} />
      <img src={data} />
    </div>
    
    
    
    )
}

export default UploadImage