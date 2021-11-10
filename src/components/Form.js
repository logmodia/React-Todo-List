import React, {useRef} from 'react'
import uuidv4 from 'uuid/dist/v4';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export default function Form(todos) {

    const inputRef = useRef()
    const newTodos = JSON.parse(JSON.stringify(todos.todosArray))

  //Add a new todo ------------------------------------------------
    const addTodoHandler = ()=>{
      
      let inputVal = inputRef.current;

      if (inputVal.value !==""){
        //newTodos.push(inputVal.value)
        todos.setTodos([...newTodos,{id : uuidv4(), name : inputVal.value, complete : false}])
      }else{
          MySwal.fire('Empty field','Please, type your todo\'s name.','warning')
        }
        
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
