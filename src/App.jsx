import { Post } from "./Post"
import { Header } from "./components/Header"


import './global.css'

 export function App() {
  return (
    <div>
    <Header/>
    
    <Post
     author="Gabriel Cedraz"
     content="Uma frase legal"
     />

    <Post
     author="Lucas Inutilismo"
     content="Outra frase legal"
    />
    </div>
   
  )
}


