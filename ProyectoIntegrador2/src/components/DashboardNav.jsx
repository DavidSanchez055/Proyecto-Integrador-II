import React from 'react'
import Logo from '../assets/logo.png'
import '../styles/navbar.css'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

export const DashboardNav = () => {
  return (
    <>
    <header>
        <img className="logo" src={Logo}/>
        <nav className="navigation">
            <NavLink to="/Dashboard"  activeClassName="active">Home</NavLink>
            <NavLink to="/Products" activeClassName="active">Products</NavLink>
            <NavLink to="/Departments" activeClassName="active">Departments</NavLink>
            <NavLink to="/Regions" activeClassName="active">Regions</NavLink>
            <NavLink to="/Profiles" activeClassName="active">Profile</NavLink>
           <button className="btnLgn-popup" >Login</button>
           
        </nav>
    </header>
    </>
  )
}
