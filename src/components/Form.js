import React, {useRef} from 'react'
import uuidv4 from 'uuid/dist/v4';

export default function Form(todos) {

    const inputRef = useRef()
    const newTodos = JSON.parse(JSON.stringify(todos.todosArray))

    const addTodoHandler = ()=>{
        let inputVal = inputRef.current;
        //newTodos.push(inputVal.value)
        todos.setTodos([...newTodos,{id : uuidv4(), name : inputVal.value, complete : false}])
        
    }
    
    return (
        <form className="form">
          <input ref={inputRef} className="todoInput" type="text" placeholder = "Type your new todo here"/>

          <div className = "containerFormbuttons">
            <button className="btn" type="button" onClick={addTodoHandler}>Add todo</button>
          </div>

        </form>
    )
}
