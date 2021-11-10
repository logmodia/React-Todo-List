import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export default function Todo(todoElements) {
    

    //Delete one todo-----------------------------------
    const deleteHandler = ()=>{

        MySwal.fire(
            {
                title : 'Do you really want to delete this todo',
                icon : 'question',
                footer : 'My Todo App',
                showCancelButton : true,
                showConfirmButton : true,
                confirmButtonText : 'Yes, Delete'

            }
        ).then(result =>{
            if (result.isConfirmed){
                const updatedTodos = todoElements.newTodos.filter(
                    (val)=> {
                        return  val.id !== todoElements.id
                    } ) 

                    todoElements.setTodos(updatedTodos)
                    
                    
                }
            })
            
            
        }
        

    const checkboxHandler = ()=>{
        todoElements.newTodos.find(todo => {
            if (todo.id === todoElements.id){
                todo.complete = !todo.complete
                
            }
            return todoElements.setTodos(todoElements.newTodos)
        })
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
