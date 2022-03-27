import styled from 'styled-components'

const ToDoDiv = styled.div`
  padding: 0.25em 1em;
  cursor: pointer;
  font-size: medium;
  &:hover {
    color: #0087f5;
  }
`;

const ToDo = ({ todo, handleToggle }) => {
  const handleClick = (e) => {
    e.preventDefault()
    handleToggle(e.currentTarget.id)
  }

  return (
    <ToDoDiv id={todo.id} className={todo.checked ? "strike" : ""} onClick={handleClick}>
        {todo.description}
    </ToDoDiv>
  );
};

export default ToDo