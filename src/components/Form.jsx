import { useState } from "react"
import styles from "../CSS/Form.module.css"

const Form = ({todos,setTodos}) => {
    const[todo,setTodo]=useState({name:"",isDone:false})
    function handleSubmit(e){
        e.preventDefault()
        setTodos([...todos,todo])
        setTodo({name:"",isDone:false})
    }

    return (  
        
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.flex}>
                    <input className={styles.input} onChange={(e)=>setTodo({name:e.target.value, isDone: false})} 
                    type="text" value={todo.name} placeholder="Type todo list"></input>
                    <button className={styles.submitBtn} type="submit">Add</button>
                </div>
            </form>
      
    );
}
 
export default Form;