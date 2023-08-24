import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/NavBar/NavBar'
import Titulo from './components/Titulo/Titulo'
import Footer from './components/Footer/Footer'
import "./index.css"
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'



function App() {
  const [count, setCount] = useState(0)
  const titulo = 'tutto al forno'
  const subtitulo = 'pedidos'
  return (
    <div>
      <NavBar />
      
      <Titulo titulo= {titulo} subtitulo= {subtitulo}/>

      <ItemListContainer/>
      <Footer/>


    </div>
  )
}

export default App
