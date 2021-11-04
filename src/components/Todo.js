export default function Todo(todoElements) {

    const deleteHandler = ()=>{
        console.log(`Element ${todoElements.text} deleted`)
    }

    return (
        <div className = "todoElement">
            <div>
                <input type="checkbox"/>{todoElements.text}
            </div>
            <button type = "button" className = "btn1" onClick ={deleteHandler}>X</button>

        </div>
        
    )
}
