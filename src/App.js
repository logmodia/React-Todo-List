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
  },[todos])

  return (
    <>
      <header className = "header">
            <h1 className = "headerTitle">My Todo App</h1>
      </header>

      <div className = "main">
        <Form todosArray = {todos} setTodos = {setTodos} LSKey = {LOCAL_STORAGE_KEY}/>
  
        <TodoList todosArray = {todos} setTodos = {setTodos}/>
      </div>

      <footer className = "footer">
            <h5 className = "headerTitle">My Todo App | ©copyright 2021 | by René Logala Modia</h5>
      </footer>
    </>
  )
}

export default App;
