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
import AppointmentForm from './components/Appointment/AppointmentForm'
import ClogCheckingComponent from './components/ClogCheckingComponent/ClogCheckingComponent'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import AppointmentList from './components/Appointment/AppointmentList'



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
  <AppointmentForm></AppointmentForm>
  <ClogCheckingComponent></ClogCheckingComponent>
  {/* <SignUp></SignUp>
  <Login></Login>
  <AppointmentList></AppointmentList> */}
  {/* <Login></Login> */}
  

   
    </>
  )
}

export default App
