function Input( {id, label, type, value, onChange} ) {

  return(
    <>
    <label htmlFor={id}>{label}:</label>
      <input id={id} type={type} value={value} onChange={onChange}></input>
      </>
  )
}

export default Input;