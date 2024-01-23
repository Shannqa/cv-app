function Customization( { style, setter } ) {
  
  function handleStyleChange(value) {
    setter(value);
  }
  
  return(
    <form id="custom-form">
      <h2>Select the style of your CV</h2>
        <div className="customization">
          <input type="radio" name="style" value="style1" id="style1" checked={style === "style1"} onChange={() => handleStyleChange("style1")}></input>
          <label htmlFor="style1">Style 1</label>
          <input type="radio" name="style" value="style2" id="style2" checked={style === "style2"} onChange={() => handleStyleChange("style2")}></input>
          <label htmlFor="style2">Style 2</label>
          <input type="radio" name="style" value="style3" id="style3" checked={style === "style3"} onChange={() => handleStyleChange("style3")}></input>
          <label htmlFor="style3">Style 3</label>
        </div>
        
      </form>
  )
}

export default Customization