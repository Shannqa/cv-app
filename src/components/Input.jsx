function Input( { id, label, type, value, onChange, placeholder } ) {
  return(
    <div className="line">
      <label htmlFor={id}>{label}:</label>
      <input id={id} type={type} value={value} placeholder={placeholder} onChange={onChange}></input>
    </div>
  )
}

export default Input;