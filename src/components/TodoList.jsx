import TodoItem from "./TodoItem";
import styles from "../CSS/Todolist.module.css"
const TodoList = ({todos,settodos}) => {
    const sortedTodos=todos.slice().sort((a,b)=>Number(a.isDone)-Number(b.isDone))
    return ( 
        <div className={styles.listContainer}>
             {sortedTodos.map(item=>(
            <TodoItem key={item.name} item={item} todos={todos} settodos={settodos} />
        ))}
        </div>
     );
}
 
export default TodoList;