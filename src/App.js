import React, {useState} from 'react';
import uuidv4 from 'uuid/dist/v4';
import './index.css';
import './components/Todo';
import Todo from './components/Todo';

function App() {

  const initialTodoArray = ["Todo 1", "Todo 2", "Todo 3", "Todo 4"]
  const [todos,setTodos] = useState(initialTodoArray)

  return (
    <div className="container">
      <div className = "container2">
        <h1>My Todo App</h1>
        <form className="form">
          <input className="todoInput" type="text"/>
          <div className = "containerFormbuttons">
            <button className="btn" type="button">Add todo</button>
            <button className="btn" type="button">delete completed</button>
          </div>
        </form>
        <div>

          {todos.map((el)=>{
            return (
              <Todo text = {el}/>
                )
              })}

        </div>

      </div>
    </div>
  )
}

export default App;
