import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HomePage } from './pages/homepage/home'
import { About } from './pages/about/about'
import { Rotas } from './Routes/Routes'

function App() {
  const [count, setCount] = useState(0)

  //ARRAY-litsa
  // const series = ["ted lasso", "Dexter", "Severence", "Stranger Things", "Breaking Bad"]

  // const numbers = [1, 2, 3, 3, 4, 4, 5, 7, 7, 9]

  // const array1 = numbers.map((i) => i*2)
  // console.log(array1)

  // esse arquivo(app.jsx) é html e js junto


  return (

    //     <>
    //     {/* <h1> Olá mundo</h1> */}
    //     {/*retorno onde vai aparecer na tela  */}

    //     {series.map((serie, index)=>(
    //     <h1 key={index}>{serie}</h1>
    //     ))}
    // <p> {series[1]}</p>
    // <p> {series[2]}</p>

    // {numbers
    // .filter((number)=> number === 7)
    // .map((number,index)=>(
    // <p key={index}>{number} </p>

    // ))}
    //     </>

    // <HomePage/>

    // <About />
   <Rotas />
  )
}

export default App
