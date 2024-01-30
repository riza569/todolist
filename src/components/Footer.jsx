import styles from "../CSS/footer.module.css"
const Footer = ({Completed,total}) => {
    return ( 
        <div className={styles.footer}>
            <span className={styles.item}>Completed Todos: {Completed}</span>
            <span className={styles.item}>Total Todos: {total}</span>
        </div>
     );
}
 
export default Footer;