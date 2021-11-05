import React, {useRef} from 'react'

export default function Form(todos) {

    const inputRef = useRef()
    const newTodos = JSON.parse(JSON.stringify(todos.todosArray))

    
    const addTodoHandler = ()=>{
        let inputVal = inputRef.current;
        //newTodos.push(inputVal.value)
        todos.setTodos([...newTodos,inputVal.value])
        
    }

    return (
        <form className="form">
          <input ref={inputRef} className="todoInput" type="text"/>

          <div className = "containerFormbuttons">
            <button className="btn" type="button" onClick={addTodoHandler}>Add todo</button>
            <button className="btn" type="button">delete completed</button>
          </div>

        </form>
    )
}
