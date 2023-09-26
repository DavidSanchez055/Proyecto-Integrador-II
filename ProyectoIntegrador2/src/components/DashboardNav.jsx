import React from 'react'
import Logo from '../assets/logo.png'
import '../styles/navbar.css'

export const DashboardNav = () => {
  return (
    <>
    <header>
        <img className="logo" src={Logo}/>
        <nav class="navigation">
            <a href="#">Home</a>
            <a href="#">Products</a>
            <a href="#">Departments</a>
            <a href="#">Regions</a>
            <a href="#">Profile</a>
           <button class="btnLgn-popup">Login</button>
           
        </nav>
    </header>
    </>
  )
}
