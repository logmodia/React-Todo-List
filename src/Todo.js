import React from 'react'

export default function todo({task, toggleTodo}) {

    function handleTodoClick() {
        toggleTodo(task.id)
    }
    return (
        <div>
            <label>
                <input type="checkbox" checked={task.complete} onChange = {handleTodoClick}/>
                {task.name}
            </label>
        </div>
    )
}
