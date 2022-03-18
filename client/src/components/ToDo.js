const ToDo = ({ todo, handleToggle }) => {
  const handleClick = (e) => {
    e.preventDefault()
    handleToggle(e.currentTarget.id)
  }

  return (
    <div id={todo.id} className={todo.checked ? "strike" : ""} onClick={handleClick}>
        {todo.description}
    </div>
  );
};

export default ToDo