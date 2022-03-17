import './App.css';
import Header from './components/Header.js'
import ToDoList from './components/ToDoList.js'
import ToDoForm from './components/ToDoForm.js'

import { useState, useEffect } from 'react'

const callBackendAPI = async (endpoint, method, body) => {
  const response = await fetch(endpoint, {
    method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
  const json = await response.json()

  if (response.status !== 200) {
    throw Error(body.message) 
  }
  return json
}

function App() {
  const [ toDoList, setToDoList ] = useState([])
  
  useEffect(async () => {
    setToDoList(await callBackendAPI('/api/todos', 'GET'))
  }, [])
  
  const handleToggle = async (id) => {
    let todo = toDoList.find(todo => todo.id == id)

    await callBackendAPI(`/api/todos/${id}`, 'PUT', {
      checked: !todo.checked
    })

    let mapped = toDoList.map(todo => {
      return todo.id == id ? { ...todo, checked: !todo.checked } : { ...todo}
    });
    setToDoList(mapped)
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.checked;
    });
    setToDoList(filtered);
  }

  const addTask = async (userInput) => {
    let todo = await callBackendAPI('/api/todos', 'POST', {
      description: userInput
    })
    setToDoList([...toDoList, todo]);
  }

  return (
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter} />
      <ToDoForm addTask={addTask} />
    </div>
  );
}

export default App;
