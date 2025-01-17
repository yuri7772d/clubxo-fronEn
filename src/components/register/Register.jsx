
import { useState, useEffect } from 'react';
import axios from 'axios';
import './register.css'

function Register() {


 


 





  const handleOnSubmitRegister = (e) => {

    
    e.preventDefault();
    
   const username = document.getElementById('username').value;
   const password = document.getElementById('password').value;
   const confirmPassword = document.getElementById('confirmPassword').value;

   const fname = document.getElementById('fname').value;
   const lname = document.getElementById('lname').value;
   const prefix = document.getElementById('prefix').value;
    if (password != confirmPassword){
      alert('Password and Confirm Password do not match.');
      return ;
    }
    axios.post(`https://apiclubxo.vercel.app/register`, { username:username, password: password ,fname:fname,lname:lname,prefix:prefix})
      .then(res => {
       
        if (res.data.token) {
          localStorage.setItem('token', res.data.token)
          window.location = '/'
          return;
        }
        alert(res.data.msg);
      })
  }


  return (
    <div className='login-box'>
    <h1 className='login-header'>Register</h1>
    <form className='register-from' onSubmit={handleOnSubmitRegister}>
      <input className='input-box' type="text" id='username' placeholder='Username' required />
      <input className='input-box' type="password" id='password' placeholder='Password' required />
      <input className='input-box' type="password" id='confirmPassword' placeholder='Confirm password' required />
     <div className='select-div ' >
  

      <select className='register-select '  id='prefix' >
          <option value={1}>เด็กชาย</option>
          <option value={2}>เด็กหญิง</option>
          <option value={3}>นาย</option>
          <option value={4}>นางสาว</option>
          <option value={5}>นาง</option>
       </select>
       </div>
      <input className='input-box' type="text" id='fname' placeholder='ชื่อจริง' required />
      <input className='input-box' type="text" id='lname' placeholder='นามสกุล' required />
      <button className='login-button' type='submit'>Sign Up</button>
    </form >
    <p>You have account? <a href='/login'>Sign In</a></p>
  </div>
  )
}

export default Register
