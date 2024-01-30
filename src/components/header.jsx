import styles from "../CSS/Header.module.css"
const Header = () => {
    return ( 
        <div className={styles.headerContainer}>
        <h1 className={styles.input} >ToDo List</h1>
        </div>
     );
}
 
export default Header;