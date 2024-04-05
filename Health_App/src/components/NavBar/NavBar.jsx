import React, { useContext } from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import UserProfile from '../Profile/UserProfile';

const NavBar = () => {
  const { user, logOut, isAdmin } = useContext(AuthContext);
   // Initialize useHistory hook

  const handleLogout = async () => {
    await logOut(); // Logout user
    window.location.href = '/login';  // Redirect to login page after logout
  };
    return (
      
        <div className="navbar bg-sky-200 text-4xl  ">
       <div className="flex-1"> 

       <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-sky-200 rounded-box w-60">
             <li id="link">
             {/* <li ><a id="link1">Homepage</a></li>
              <li><a id="link2"> Products</a></li>
              <li><a id="link3">Check Your Skin Type</a></li>
              <li><a id="link4">Know Your Skin</a></li>
              <li><a id="link5">Skin Care Routin</a></li>
              <li><a id="link6">Check Clog Poring Ingredients</a></li>
              <li ><a id="link7">Clinical Research</a></li>
              

             <li> <Link to="/pore">Ingredient Check</Link></li>
             <li> <Link to="/quiz">Skin Quiz</Link></li> */}
              <Link className="link1"  to="/">Home</Link>
             <Link className="link1" to="/skinTypes">Know Your Skin</Link>
             <Link className="link1" to="/skinCareRoutin">Your Skin Care Routin</Link>
             <Link className="link1" to="/quiz">Your Skin Quiz</Link>
             <Link className="link1" to="/product">Products for Your Skin</Link>
             <Link className="link1" to="/pore">Check Ingredients</Link>
            
             {/* <Link className="link1" to="/health">Healthy Food Cart</Link> */}
             <Link className="link1" to="/food">Healthy Food </Link>
             <Link className="link1" to="/research">Research</Link>


             {isAdmin && <Link className="link1" to="/admin/appointments">All Appointments</Link>} {/* Only admin can see */}
              {user && !isAdmin && <Link className="link1" to="/make">Make Appointment</Link>} {/* Non-admin users */}
              {user && !isAdmin && <Link className="link1" to="/viewAppointments">View Appointments</Link>} {/* Non-admin users */}
             {/* {user && <li>  <Link to="/make">Make Appointment</Link></li>}
             {user && <li> <Link to="/viewAppointments">View Appointments</Link></li>} */}


             </li>

            
            </ul>
          </div>
        </div>
       </div>

       <div className="n">
   <div className='container'>
   <h2 id ="header" className="btn btn-ghost text-4xl text-blue-400 font-weight:400 text-center">SkinSync</h2>
   </div>
   
  </div>

  <div className="n3">
  <div className="flex-none gap-2">
   
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between link1">
          {user ? <UserProfile email={user.email} /> : null}
                  
          </a>
        </li>
        {/* <li><a>Settings</a></li> */}
        {/* <li><a>Logout</a></li> */}
        {user?.uid ?
                <li><button className="logout-btn link1" onClick={handleLogout}>Logout</button></li> 
                :
                 <Link className="link1" to="/login">Login</Link>
                
              }
      </ul>
    </div>
  </div>
        
  </div>

       
      </div>
        
    );
};

export default NavBar;



