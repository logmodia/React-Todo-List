import React from 'react'
import Todo from './Todo'

export default function TodoList({todos,toggleTodo}) {
    return (
        todos.map((el) =>{
            return <Todo key={el.id} task = {el} toggleTodo = {toggleTodo} />
        })
    )
}
