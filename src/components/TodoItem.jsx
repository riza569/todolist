import styles from "../CSS/Todoitem.module.css"
const TodoItem = ({item,todos,settodos}) => {
    function handledelete(item){
        settodos(todos.filter(todo=>todo!==item))
    }
    function handleClick(name){
        const newArray=todos.map(todo=>todo.name===name ?({...todo,isDone:!todo.isDone}):todo)
        settodos(newArray)
    }
    const className= item.isDone ? styles.completed:""
    return ( 
        <div className={styles.itemContainer}>
            <div className={styles.itemName}>
                <span className={className} onClick={(e)=>handleClick(item.name)}>
                {item.name}
                </span>
                <span>
                    <button onClick={()=>handledelete(item)} className={styles.deleteBtn}>x</button>
                </span>
            </div>
            
            <hr className={styles.line}/>
        </div>
     );
}
 
export default TodoItem;