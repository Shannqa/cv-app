function Customization( { style, setter } ) {
  
  function handleStyleChange(e) {
    setter(e.target.value);
  }
  
  return(
    <div className="customization">
      <fieldset>
        <legend>Select the style of your CV:</legend>
        <div>
          <input type="radio" name="style" value="style1" id="style1" checked onChange={handleStyleChange}></input>
          <label htmlFor="style1">Style 1</label>
          <input type="radio" name="style" value="style2" id="style2" onChange={handleStyleChange}></input>
          <label htmlFor="style2">Style 2</label>
          <input type="radio" name="style" value="style3" id="style3" onChange={handleStyleChange}></input>
          <label htmlFor="style3">Style 3</label>
        </div>
      </fieldset>
    </div>
  )
}

export default Customization