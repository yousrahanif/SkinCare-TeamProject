import React from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
      
        <div className="navbar bg-sky-200 text-4xl">
       <div className="flex-1"> 

       <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-sky-200 rounded-box w-52">
             <li id="link">
             <li ><a id="link1">Homepage</a></li>
              <li><a id="link2"> Portfolio</a></li>
              <li><a id="link3">About</a></li>
              <li><a id="link4">About</a></li>
              <li><a id="link5">About</a></li>
              <li><a id="link6">About</a></li>
             <li> <Link to="/login">Login</Link></li>
             <li> <Link to="/pore">Ingredient Check</Link></li>
             <li> <Link to="/quiz">Skin Quiz</Link></li>
             <li> <Link to="/makeAppointments">Appointment</Link></li>
             <li> <Link to="/viewAppointments">View Appointments</Link></li>

             




             </li>
            </ul>
          </div>
        </div>
       </div>

       <div className="navbar-center">
    <a id ="header" className="btn btn-ghost text-xl text-blue-400 font-weight:900">SkinSync Pro</a>
  </div>

  <div className="navbar-end">
  <div className="flex-none gap-2">
   
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
        
  </div>

       
      </div>
        
    );
};

export default NavBar;