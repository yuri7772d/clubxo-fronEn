import React from 'react'
import './header.css'
import { RiAccountCircle2Line,RiChat3Line } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Header() {

  if(localStorage.getItem('token') == null){
    
    window.location= '/login';
  }


  return (
    
    <header>
     
      <h1 className='logo'>Club </h1>
      <div className='menu' >
        
        <button className='message-box-button' ><Link to='/msgBox'><RiChat3Line size={25} /></Link> </button>
        <button className='club-button'><Link to='/club'><FaUserFriends size={25}/></Link>   </button>
       <button className='profile-button'> <Link to='/myProfile'> <RiAccountCircle2Line size={25}/></Link> </button>
       
        <button className='logout-button' onClick={()=>{localStorage.removeItem('token');  window.location= '/login'}}>Logout</button>
      </div>
    </header>
  )
}

export default Header
