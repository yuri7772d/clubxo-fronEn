
import { useState } from 'react';
import axios from 'axios';
import './login.css';






function Login() {

 

  const handleOnSubmitLogin = (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    axios.post(`https://apiclubxo.vercel.app/login`, { username:username, password: password })
      .then(res => {
        if (res.data.token) {
          localStorage.setItem('token', res.data.token)
          window.location = '/'
          return;
        }
        alert(res.data.msg)
      })
  }




  return (


    <div className='login-box'>
      <h1 className='login-header'>Login</h1>
      <form className='login-from' onSubmit={handleOnSubmitLogin}>
        <input className='input-box' type="text" id='username' placeholder='Username' required />
        <input className='input-box' type="password" id='password' placeholder='Password' required />
        <button className='login-button'>Sign In</button>
      </form>
      <p>Don't have account? <a href='/register'>Sign Up</a></p>
    </div>

  )
}

export default Login
