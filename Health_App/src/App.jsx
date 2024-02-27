import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Quiz from './components/Quiz/Quiz'
import HealthFoodCart from './components/HealthFoodCart/HealthFoodCart'
import SkinCare from './components/SkinCare/SkinCare'
import Products from './components/Products/Products'
import SkinTypes from './components/SkinTypes/SkinTypes'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar></NavBar>
    <Quiz></Quiz>
    <SkinCare></SkinCare>

    
    <HealthFoodCart></HealthFoodCart>
    <Products></Products>
  
  <SkinTypes></SkinTypes>

   
    </>
  )
}

export default App
