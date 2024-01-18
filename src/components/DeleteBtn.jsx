function DeleteBtn( { id, e, handler } ) {
  return(
    <button className="del-btn" onClick={handler}>
    X</button>
  )
}

export default DeleteBtn;