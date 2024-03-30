import { createBrowserRouter } from "react-router-dom";


import Main from "../layout/Main";

import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import ClogCheckingComponent from "../components/ClogCheckingComponent/ClogCheckingComponent";
import Quiz from "../components/Quiz/Quiz";
import AppointmentList from "../components/Appointment/AppointmentList";
// import AppointmentForm from "../components/Appointment/AppointmentForm";
import MakeAppointment from "../components/Appointment/MakeAppointment";
import PrivateRoute from "./PrivateRoute";
import AllAppointments from "../components/Appointment/AllAppointments";
import SkinTypes from "../components/SkinTypes/SkinTypes";
import SkinCare from "../components/SkinCare/SkinCare";
import Products from "../components/Products/Products";
import NightSkinCare from "../components/NightSkinCare/NightSkinCare";
import MorningSkinCare from "../components/MorningCare/MorningSkinCare";
import Home from "../components/Home/Home";
import Research from "../components/Research/Research";
import HealthFoodCart from "../components/HealthFoodCart/HealthFoodCart";
import Diseases from "../components/Diseases/Diseases";
import Acne from "../components/Ance/Acne";
import Eczema from "../components/Eczema/Eczema";
import Rosacea from "../components/Rosacea/Rosacea";
import Cancer from "../components/Cancer/Cancer";
import Psoriasis from "../components/Psoriasis/Psoriasis";
import Food from "../components/Food/Food";
import GoodFood from "../components/Food/GoodFood";
import BadFood from "../components/Food/BadFood";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>

        },
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
          path: '/admin/appointments', 
          element: <AllAppointments></AllAppointments>
        },
     
       
        
          // {
          //   path: '/makeAppointments', 
          //   element: <AppointmentForm></AppointmentForm>
  
          // },
          // {
          //   path: '/viewAppointments', 
          //   element: <AppointmentList></AppointmentList>
  
          // },
          { path: '/viewAppointments', element: <PrivateRoute><AppointmentList /></PrivateRoute> },

          {
            path: '/make', 
            element: <PrivateRoute><MakeAppointment></MakeAppointment></PrivateRoute>
          },
          {
            path:'/skinTypes', 
            element: <SkinTypes></SkinTypes>
          },
          {
            path:'/skinCareRoutin', 
            element: <SkinCare></SkinCare>
          },
          {
            path:'/product', 
            element: <Products></Products>
          },
          {
            path:'/morningCare', 
            element: <MorningSkinCare></MorningSkinCare>
          },
          {
            path:'/nightCare', 
            element: <NightSkinCare></NightSkinCare>
          }, 
          {
            path:'/research',
            element:<Research></Research>
          },
          {
            path:'/health',
            element:<HealthFoodCart></HealthFoodCart>
          },
          {
            path:'/diseases',
            element:<Diseases></Diseases>
          },

          {
            path:'/acne',
            element:<Acne></Acne>
          },
          {
            path:'/eczema',
            element:<Eczema></Eczema>
          },
          {
            path:'/psoriasis',
            element:<Psoriasis></Psoriasis>
          },
          {
            path:'/rosacea',
            element:<Rosacea></Rosacea>
          },
          {
            path:'/cancer', 
            element: <Cancer></Cancer>
          },
          {
            path:'/food', 
            element: <Food></Food>
          },
          {
            path:'/goodFood', 
            element: <GoodFood></GoodFood>
          },
          {
            path:'/badFood', 
            element:<BadFood></BadFood>
          },







        
    
        
      ]
    },
  ]);


  export default router;