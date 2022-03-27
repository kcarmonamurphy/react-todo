import { useState } from 'react'
import Button from './Button.js'
import Input from './Input.js'

const ToDoForm = ({ addTask, handleShow, handleClear }) => {
  const [ userInput, setUserInput ] = useState('')
  const [ validationMessage, setValidationMessage ] = useState('')

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (userInput === '') return setValidationMessage('todo cannot be blank')

    setValidationMessage(null)
    addTask(userInput)
    setUserInput('')
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', marginBottom: '10px' }}>
      <form style={{ display: 'flex', alignItems: 'flex-start' }} onSubmit={handleSubmit}>
        <Input validationMessage={validationMessage} style={{ marginRight: '10px' }} value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
        <Button style={{ marginRight: '10px' }} primary>Submit</Button>
      </form>

      <span style={{ marginRight: '10px' }}> | </span>

      <Button style={{ marginRight: '10px' }} onClick={handleClear}>Clear Completed</Button>
      <Button onClick={handleShow} primary>Show all</Button>
    </div>
  );
};

export default ToDoForm;