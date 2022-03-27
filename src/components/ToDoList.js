import ToDo from './ToDo.js'

const ToDoList = ({toDoList, handleToggle}) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', textAlign: 'center' }}>
      {toDoList.map(todo => {
        return (
          <ToDo key={todo.id} todo={todo} handleToggle={handleToggle}/>
        )
      })}
    </div>
  );
 }
  
 export default ToDoList