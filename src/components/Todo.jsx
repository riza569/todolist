
import { useState } from "react"
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";
const Todo = () => {
    const[todos,setTodos]=useState([])
    
    const Completed=todos.filter((todo)=>todo.isDone).length
    const total=todos.length
    return (
        <div>
        <Form todos={todos} setTodos={setTodos}/>
        <TodoList settodos={setTodos} todos={todos}/>
        <Footer Completed={Completed} total={total}/>
        </div>
      
      );
}
 
export default Todo;