function DeleteBtn( { id, label, type, value, onChange, placeholder } ) {
  return(
    <button onclick={handleDelete}>
    X</button>
  )
}

export default DeleteBtn;