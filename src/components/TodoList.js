import React, {useState} from 'react';
import Todo from './Todo';

let style_hideGroup = {visibility: "hidden", position : "absolute", left :0}

export default function TodoList(todos) {

   //const [display, setDisplay] = useState(false)

    const newTodos = JSON.parse(JSON.stringify(todos.todosArray))
        let uncompleted=[];
        let completed=[];
        newTodos.map(
            (el) => {
            if (el.complete === false){
                
                uncompleted.push(<Todo key = {el.id} name = {el.name} id = {el.id} newTodos = {newTodos} 
                completed = {el.complete} setTodos = {todos.setTodos}/>)

            }else{
                completed.push(<Todo key = {el.id} name = {el.name} id = {el.id} newTodos = {newTodos} 
                    completed = {el.complete} setTodos = {todos.setTodos}/>)
            }
            }
        )
        
        const viewCompleted = ()=>{
            if (completed.length !== 0) {
                style_hideGroup = {visibility: "visible"}
                //setDisplay(true)
                //setDisplay(false)
            }
        }

        return(
            <>
                <div>
                    <button onClick = {viewCompleted}>View completed</button>
                </div>
                <div className="ContainertodoGroups">
                    {
                        uncompleted.length !== 0 ? <div className="todoGroup">{uncompleted}</div> : <div className="todoGroup" style = {style_hideGroup}/>
                    }
                    {
                        completed.length !== 0 ? <div className="todoGroup" >{completed}</div> : <div className="todoGroup" style = {style_hideGroup}/>
                    }
                    
                </div>
            </>
                
        )
    
}
