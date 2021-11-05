import { useState } from "react"

export default function Todo(todoElements) {
    //const [newArr,setDelTodo] = useState(todoElements.array)

    const deleteHandler = ()=>{
        const updatedTodos = todoElements.newTodos.filter((val,index,arr)=> val !== todoElements.name ) 
        todoElements.setTodos(updatedTodos)

    }

    return (
        <div className = "todoElement">
            <div>
                <input type="checkbox"/>{todoElements.name}
            </div>
            <button type = "button" className = "btn1" onClick ={deleteHandler}>X</button>

        </div>
        
    )
}
