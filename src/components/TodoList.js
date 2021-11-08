import Todo from './Todo';

export default function TodoList(todos) {

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
    return(
        <div className="ContainertodoGroups">
            <div className="todoGroup">
                {uncompleted}
            </div>

            <div className="todoGroup" style={{visibility: "hidden", position : "absolute", left :0}}>
                {completed}
                
            </div>
        </div>
    )
    
}
