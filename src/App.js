import './App.css';
import { useState } from "react";
import TodoList from './components/TodoList';
import Form from './components/Form';

function App() {
const [toDos, setToDos] = useState([])

function addToDo(newTodo){
  setToDos(
    (list) => [...list, newTodo]
  )
}
function handleTodo(item){
  const removido = toDos.filter((todo) => {
    return todo !== item
});
  setToDos(removido)
}

  return (
    <div className="App">
      <div className="App-header">
        <h1>To Do List</h1> 
        <Form addToDo={addToDo}/> 
        <TodoList  toDos={toDos} handleTodo={handleTodo}/>         
          
      </div>
    </div>
  );
}

export default App;
