function Input( {id, label, type, value, onChange} ) {

  return(
      <label>{label}:
        <input id={id} type={type} value={value} onChange={onChange}></input>
      </label>
  )
}

export default Input;