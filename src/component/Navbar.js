import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="mx-3" >
      <nav className="navbar navbar-expand-lg navbar-light bg-light" >
      <Link className="navbar-brand" to="/"> Test-App </Link>
       
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <NavLink style={({isActive})=>{return{backgroundColor: isActive? 'green':null,color:isActive? 'white':null}}} className="nav-link" to="/"> Home </NavLink>

            </li>
            <li className="nav-item">
            <NavLink style={({isActive})=>{return{backgroundColor: isActive? 'green':null,color:isActive? 'white':null}}} className="nav-link" to="/aboutus"> About us </NavLink>
            </li>
            
            <li className="nav-item">
            <NavLink style={({isActive})=>{return{backgroundColor: isActive? 'green':null,color:isActive? 'white':null}}} className="nav-link" to="/user/mukesh"> Mukesh </NavLink>
            </li>
            <li className="nav-item">
            <NavLink style={({isActive})=>{return{backgroundColor: isActive? 'green':null,color:isActive? 'white':null}}} className="nav-link" to="/user/garg"> Garg </NavLink>
            </li>
            <li className="nav-item">
            <NavLink style={({isActive})=>{return{backgroundColor: isActive? 'green':null,color:isActive? 'white':null}}} className="nav-link" to="/login"> SignIn </NavLink>
            </li>
            <li className="nav-item">
            <NavLink style={({isActive})=>{return{backgroundColor: isActive? 'green':null,color:isActive? 'white':null}}} className="nav-link" to="/manageuser"> Manage-User </NavLink>
            </li>
          </ul>
        </div>
      </nav> 
    </div>
  );
}
