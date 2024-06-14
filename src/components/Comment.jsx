import { Avatar } from './Avatar'
import { ThumbsUp, Trash } from 'phosphor-react'

import styles from './Comment.module.css'

export function Comment() {
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/cedrazgabriel.png"/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Gabriel Cedraz</strong>
                            <time title='11 de Maio às 08:13h' dateTime="2024-05-11 08:13:30">Cerca de 1h atrás</time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>Muito bom Devon, parabéns!</p>
                </div>
                <footer>
                   <button>
                    <ThumbsUp size={20} />
                    Aplaudir <span>20</span>
                   </button>
                </footer>
            </div>
        </div>
    )
}