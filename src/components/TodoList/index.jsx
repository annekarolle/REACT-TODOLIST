import "./style.css"

function TodoList({toDos, handleTodo}){
    return (
        <>
        <ul>
        {toDos.map((todo, index) => (
        <li key={index}><p>{todo}</p>
        <button className="btnconcluir" onClick={() => {handleTodo(todo)}}>Conluir Tarefa</button></li>
        ))}       
                 
        </ul>        
        </>
    )  
}

export default TodoList