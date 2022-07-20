import { useState } from "react"
import "./style.css"

function Form({addToDo}){
    const [todoInput, setTodoInput]  = useState("")

    return(  
    
   <div className="container">
     <input type='text'
                placeholder='New To Do List'
                value={todoInput}
                onChange={event => setTodoInput(event.target.value)} />            
      <button onClick={() => {addToDo(todoInput)}}>Add</button>
   </div>
       
    )

}

export default Form