import { createBrowserRouter } from "react-router-dom";


import Main from "../layout/Main";

import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import ClogCheckingComponent from "../components/ClogCheckingComponent/ClogCheckingComponent";
import Quiz from "../components/Quiz/Quiz";
import AppointmentList from "../components/Appointment/AppointmentList";
import AppointmentForm from "../components/Appointment/AppointmentForm";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/login',
            element: <Login></Login>
        }, 
        {
            path: '/signup', 
            element: <SignUp></SignUp>
        }, 
        {
          path: '/pore', 
          element: <ClogCheckingComponent></ClogCheckingComponent>

        }, 
        {
          path: '/quiz', 
          element: <Quiz></Quiz>

        },
       
        
          {
            path: '/makeAppointments', 
            element: <AppointmentForm></AppointmentForm>
  
          },
          {
            path: '/viewAppointments', 
            element: <AppointmentList></AppointmentList>
  
          }


        
    
        
      ]
    },
  ]);


  export default router;