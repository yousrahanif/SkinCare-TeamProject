import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Quiz from './components/Quiz/Quiz'
import HealthFoodCart from './components/HealthFoodCart/HealthFoodCart'
import Product from './components/Product/Product'
import SkinCare from './components/SkinCare/SkinCare'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar></NavBar>
    <Quiz></Quiz>
    <SkinCare></SkinCare>

    
    <HealthFoodCart></HealthFoodCart>
  

   
    </>
  )
}

export default App
