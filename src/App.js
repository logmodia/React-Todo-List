import React, {useState, useRef, useEffect} from 'react';
import uuidv4 from 'uuid/dist/v4';
import todo from './Todo';
import TodoList from './TodoList';

const LOCAL_STORAGE_KEY = 'todoApp.todo'

function App() {

  const [todos, setTodo] = useState([])
  const todoInputRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodo(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  const toggleTodo = (id)=>{
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodo(newTodos)
  }

  const todoAdd = (e)=>{
    const todoName = todoInputRef.current.value
    if (todoName === '') return console.log("error",uuidv4())
    setTodo((prevTodos)=>{
      return [...prevTodos, {id: uuidv4(), name: todoName, complete: false}]
    })

    todoInputRef.current.value=null
  }

  const handleClearCompletTodos = ()=>{
    const newTodos = todos.filter(todo => !todo.complete)
    setTodo(newTodos)
  }

  const msg ="task(s) left to do"

 return (
   <div>
      <header>
        <h1>My Todo app</h1>
      </header>

      <div>
          <input ref={todoInputRef} type="text"></input>
          <button onClick={todoAdd} type="button">Add Todo</button>
          <button onClick={handleClearCompletTodos} type="button">Clear complete</button>
          <div>{todos.filter(todo => !todo.complete).length} {msg}</div>
      </div>

      <TodoList todos = {todos} toggleTodo = {toggleTodo}/>

   </div>
 )
}


export default App;
