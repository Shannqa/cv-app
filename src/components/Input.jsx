function Input( {id, label, type, value} ) {

  function onChange(event) {
    // setValue(event.target.value);
  }

  return(
      <label>{label}:
        <input id={id} type={type} value={value} onChange={onChange}></input>
      </label>
  )
}

export default Input;