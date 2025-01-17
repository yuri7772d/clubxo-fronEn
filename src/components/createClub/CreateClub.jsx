import React from 'react'
import './createClub.css'
import Header from '../header/Header'
import { Link } from 'react-router-dom'
import axios from 'axios'


function CreateClub() {


const handleOnCreate =(e)=>{
    e.preventDefault();
    
    const clubname = document.getElementById('clubname').value;
    const clubcomment = document.getElementById('clubcomment').value;
    const token = localStorage.getItem('token');
    axios.post('https://apiclubxo.vercel.app/create',{clupname:clubname,clubcomment:clubcomment},{headers:{Authorization:`Bearer ${token}` } })
      .then(res => {
       
        if (res.data.status=='ok') {

          window.location = '/'
          return;
        }
        alert(res.data.msg)
    })
       



}



  return (
    <div>
        <Header></Header>
              <div className='my-profile-box'>
            <div className='create-card'>
                <h3 className='create-club-header'>สร้างชมรมของคุณ?</h3>
                <div className='boder-bottom-create'></div>
                <input id='clubname' className='log-name-club' placeholder='ชื่อชมรม'/>
                <textarea id='clubcomment' className='log-Detail-club' placeholder='คำอธิบายของชมรม'/>
                <div>
                  <button className='join-club-button'><Link to='/join'> join Club</Link></button>
                  <button type='submit' onClick={handleOnCreate} className='create-club-button'>Create +</button>
                </div>
                
              
            </div>
        </div>
    </div>
  )
}

export default CreateClub
