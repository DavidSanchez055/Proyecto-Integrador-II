import React from 'react'
import Logo from '../assets/logo.png'
import loro from '../assets/macau-loro.jpg'
import '../styles/Login.css'
import { LoginButton }   from '../components/loginButton.jsx'
import { SignInButton } from './SignInButton'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const FormLogin = () => {

  const[usuario, setUsuario] = useState('');
  const[password, setPassword] = useState('');
  const navigate = useNavigate();

  const InicioSesion = async(e) => {
    e.preventDefault();
    console.log("Usuario: ", usuario);
    console.log("Password: ", password);

    const data = {
      usuario: usuario,
      password: password
    }
    
    //Consumo de servicio Login
    await axios.post('http://89.116.25.43:3500/api/login', data)
    .then(response => {
      console.log(response);
    localStorage.setItem('token', response.data.jwt);
    localStorage.setItem('usuario', response.data.user);
    localStorage.setItem('username', response.data.user.usuario);
    navigate('/Dashboard');
    })
    .catch(error => {
      console.log(error);
    })
  }

  
  

  return (
    <div className="card_main">
      <div className="card_form">
        <img src={Logo}/>
        <h4>Login</h4>
        <div className="input_user">
          <label className="labels">User</label>
          <input className="inputs" type="text" placeholder="Username" 
          onChange={(e) => {setUsuario(e.target.value)}}
          />

        </div>
        <div className="input_password">
          <label className="labels">Password</label>
          <input className="inputs" type="password" placeholder="Password" 
          onChange={(e) => {setPassword(e.target.value)}}
          />

        </div>
        <div className="option">
          <label><input type="checkbox" />Remember me</label>
          <a href="#">Forgot password?</a>
        </div>

        <form>
          <div className="lgnBtn">
            <LoginButton fnInicioSesion={InicioSesion}/>
            <SignInButton />
          </div>
        </form>

      </div>
      <div className="photo">
        <img src={loro} />
      </div>
    </div>
  )
}