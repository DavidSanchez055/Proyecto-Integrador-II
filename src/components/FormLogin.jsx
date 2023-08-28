import React from 'react'
import Logo from '../assets/logo.png'
import loro from '../assets/macau-loro.jpg'
import '../styles/Login.css'


export const FormLogin = () => {
  return (
    <div class="card_main">
      <div class="card_form">
        <img src={Logo}/>
        <h4>Login</h4>
        <div class="input_user">
          <label class="labels">User</label>
          <input class="inputs" type="text" placeholder="Username" />

        </div>
        <div class="input_password">
          <label class="labels">Password</label>
          <input class="inputs" type="text" placeholder="Password" />

        </div>
        <div class="option">
          <label><input type="checkbox" />Remember me</label>
          <a href="#">Forgot password?</a>
        </div>
        <form action="Dashboard.html">
          <div class="lgnBtn">
            <button type="submit" >Login</button>
          </div>
        </form>
      </div>
      <div class="photo">
        <img src={loro} />
      </div>
    </div>
  )
}