import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import styles from './App.module.css'
import './global.css'



 export function App() {
  return (
    <div>
    <Header/>
    
     <div className={styles.wrapper}>
      <Sidebar/>
      <main>
          <Post
          author="Gabriel Uhu"
          content="Uma frase legal"
          />
           <Post
          author="Gabriel Uhu"
          content="Uma frase legal"
          />
      </main>
     </div>
    </div>
   
  )
}


