import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar.jsx'
import Products from './components/Products/Products.jsx'
import AuthProvider from './providers/AuthProviders.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    // children: [
    //   {
    //     path: '/',
    //     element: <Products></Products>
     
    //    }
    // ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)



// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
   
//   </React.StrictMode>,
// )
