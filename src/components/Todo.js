import { useState } from "react"

export default function Todo(todoElements) {

    const deleteHandler = ()=>{
        const updatedTodos = todoElements.newTodos.filter(
            (val,index,arr)=> {
                return  val.id !== todoElements.id
            } ) 

        todoElements.setTodos(updatedTodos)

    }

    const checkboxHandler = ()=>{
        
    }

    return (
        <div className = "todoElement">
            <div>
                <input type="checkbox" checked = {todoElements.completed} onChange = {checkboxHandler}/>{todoElements.name}
            </div>
            <button type = "button" className = "btn1" onClick ={deleteHandler}>X</button>

        </div>
        
    )
}
