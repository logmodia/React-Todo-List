import React, {useState} from 'react';
import Todo from './Todo';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)


const style_hideGroup_initial = {visibility: "hidden", position : "absolute", left :0}
let style_hideGroup = {visibility: "hidden", position : "absolute", left :0}
let btnTxt= "View completed"


export default function TodoList(todos) {

   const [display, setDisplay] = useState(false)
   
    const newTodos = JSON.parse(JSON.stringify(todos.todosArray))

    let uncompleted=[];
    let completed=[];

    //Check the state to display or not the completed list
    const testState = ()=>{
        if (display === false){
            style_hideGroup = {visibility: "visible", position : "static"}
            btnTxt = "Hide completed"
            setDisplay(true)
            
        }else{
            style_hideGroup = {visibility: "hidden", position : "absolute", left : 0}
            btnTxt = "View completed"
            setDisplay(false)
        }
    }
    
    //Creating two todos list : completed and uncompleted
    newTodos.map(
        (el) => {
        if (el.complete === false){ //uncomleted list
            
            uncompleted.push(<Todo key = {el.id} name = {el.name} id = {el.id} newTodos = {newTodos} 
            completed = {el.complete} setTodos = {todos.setTodos}/>)

        }else{ //Comleted list

            completed.push(<Todo key = {el.id} name = {el.name} id = {el.id} newTodos = {newTodos} 
                completed = {el.complete} setTodos = {todos.setTodos}/>)
        }
        }
    )
        
    //On click viewCompleted button, hide or display completed todos list if there is at least one todo
    const viewCompleted = ()=>{
        if (completed.length !== 0) {
            testState()
        }else{
            MySwal.fire('Empty list','There is no completed todo','info')
        }
    }

        //Delete all completed todos-----------------------------------------
        const deleteAllCompleted_handler = ()=>{

            MySwal.fire({
                title: <p>Do you really want to delete all completed todos</p>,
                icon : 'question',
                footer: 'My Todo App',
                
                showCancelButton : true,
                showConfirmButton : true,
                confirmButtonText : 'Yes, Delete',
                
              }).then((result) => {
                  if (result.isConfirmed){
                      const filtered = newTodos.filter(todo => !todo.complete)
                      todos.setTodos(filtered)
                      testState()
                      return MySwal.fire(<p>Deleted successfully</p>)
              
                  }
              })

        }

        let countUncompleted = newTodos.filter(todo => !todo.complete)
        let countCompleted = newTodos.filter(todo => todo.complete)

        if (countCompleted.length === 0) {
            btnTxt = "View completed"
            style_hideGroup=style_hideGroup_initial
        }

        return(
            <>
                <div className = "topListBtn_Container">
                    <button className = "btn2" onClick = {viewCompleted}>{btnTxt}</button>
                    <button className = "btn2" onClick = {deleteAllCompleted_handler} style = {style_hideGroup}>Delete all completed</button>
                    <span className = "label labelUncompleted">{countUncompleted.length} todo(s) uncompleted</span>
                    <span className = "label labelCompleted">{countCompleted.length} todo(s) completed</span>
                </div>

                <div className="ContainertodoGroups">
                    {
                        uncompleted.length !== 0 ? <div className="todoGroup">{uncompleted}</div> : <div className="todoGroup" style = {style_hideGroup_initial}/>
                    }
                    {
                        completed.length !== 0 ? <div className="todoGroup" style = {style_hideGroup}>{completed}</div> : <div className="todoGroup" style = {style_hideGroup}/>
                    }
                    
                </div>
            </>
                
        )
    
}
