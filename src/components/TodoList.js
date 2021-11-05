import React, {useState} from 'react'
import Todo from './Todo';

export default function TodoList(todos) {

    const newTodos = JSON.parse(JSON.stringify(todos.todosArray))

    return(
        newTodos.map(
            (el, index) => {
                return <Todo name = {el} newTodos = {newTodos} setTodos = {todos.setTodos}/>
            }
        )

    )
    
}
