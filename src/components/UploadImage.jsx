import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function UploadImage( { data, setter }) {
  
  function handleUpload(e) {
    setter(URL.createObjectURL(e.target.files[0]));
  }
  
  return(
    <form id="image-form">
      <h2>Photo</h2>
      <div className="fields">
        <h3>Upload your photo</h3>
        <input type="file" accept="image/png, image/jpeg" onChange={handleUpload} />
        <p>Allowed formats: png, jpg. Recommended size: 200x200px.</p>
        {data ? <img src={data} className="photo" /> : null}
      </div>
      
    </form>
    
    
    
    )
}

export default UploadImage