import styles from './Sidebar.module.css'
import {PencilLine} from 'phosphor-react'

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
           <img className={styles.cover}
            src="https://images.unsplash.com/photo-1608306448197-e83633f1261c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
            />
            
           <div className={styles.profile}>
           <img
            className={styles.avatar}
            src="https://github.com/cedrazgabriel.png" />
            <strong>Gabriel Cedraz</strong>
            <span>Web Developer</span>
            <footer>
                <a href="#">
                <PencilLine size={20}/>
                    Editar o seu perfil</a>
            </footer>
            
           </div>
        </aside>
    );
}