import React, {useState} from 'react'
import Todo from './Todo';

export default function TodoList(todos) {

    const newTodos = JSON.parse(JSON.stringify(todos.todosArray))

    return(
        newTodos.map(
            (el) => {
                return <Todo key = {el.id} name = {el.name} id = {el.id} newTodos = {newTodos} completed = {el.complete} setTodos = {todos.setTodos}/>
            }
        )

    )
    
}
