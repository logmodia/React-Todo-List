import React, {useState, useEffect} from 'react';
import './index.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

const LOCAL_STORAGE_KEY = 'todoApp.todo'

function App() {

  const initialTodoArray = []
  const [todos,setTodos] = useState(initialTodoArray)

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  },[])

  useEffect(() => {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  })

  return (
    <div className="container">
      <div className = "container2">
        <h1>My Todo App</h1>
          <Form todosArray = {todos} setTodos = {setTodos} LSKey = {LOCAL_STORAGE_KEY}/>
        <div>
          <TodoList todosArray = {todos} setTodos = {setTodos}/>
        </div>

      </div>
    </div>
  )
}

export default App;
