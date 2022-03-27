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
  
  useEffect(() => {
    (async () => {
      setToDoList(await callBackendAPI('/api/todos/search?checked=false', 'GET'))
    })()
  }, [])
  
  const handleToggle = async (id) => {
    let todo = toDoList.find(todo => String(todo.id) === id)

    await callBackendAPI(`/api/todos/${id}`, 'PATCH', {
      checked: !todo.checked
    })

    let mapped = toDoList.map(todo => {
      return String(todo.id) === id ? { ...todo, checked: !todo.checked } : { ...todo}
    });
    setToDoList(mapped)
  }

  const handleClear = () => {
    let filtered = toDoList.filter(task => {
      return !task.checked
    });
    setToDoList(filtered)
  }

  const handleShow = async () => {
    let todos = await callBackendAPI('/api/todos', 'GET')
    setToDoList(todos)
  }

  const addTask = async (userInput) => {
    let todo = await callBackendAPI('/api/todos', 'POST', {
      description: userInput
    })
    setToDoList([todo, ...toDoList])
  }

  return (
    <div className="App">
      <Header />
      <ToDoForm addTask={addTask} handleClear={handleClear} handleShow={handleShow} />
      <div style={{ marginBottom: '10px' }}>
        <ToDoList toDoList={toDoList} handleToggle={handleToggle} />
      </div>
    </div>
  );
}

export default App;
