import React, {useState} from 'react';
import uuidv4 from 'uuid/dist/v4';
import './index.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

const LOCAL_STORAGE_KEY = 'todoApp.todo'

function App() {

  const initialTodoArray = ["Todo 1", "Todo 2", "Todo 3", "Todo 4"]
  const [todos,setTodos] = useState(initialTodoArray)

  return (
    <div className="container">
      <div className = "container2">
        <h1>My Todo App</h1>
          <Form todosArray = {todos} setTodos = {setTodos}/>
        <div>
          <TodoList todosArray = {todos} setTodos = {setTodos}/>
        </div>

      </div>
    </div>
  )
}

export default App;
