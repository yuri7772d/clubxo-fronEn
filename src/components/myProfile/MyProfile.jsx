import React, { useEffect, useState } from 'react'
import './myProfile.css'
import Header from '../header/Header'
import axios from 'axios'
function MyProfile() {

    const [prefix, setPrefix] = useState('')
    const [sex, setSex] = useState('')
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [userId, setUserId] = useState('')


useEffect(()=>{
    const token = localStorage.getItem('token');
   
    axios.get('https://apiclubxo.vercel.app/myProfile', { headers: { Authorization: `Bearer ${token}` } })
        .then(res => {
            if(!res.data.user){
                localStorage.removeItem('token')
                window.location='/login'
            }
            setFname(res.data.user.fname)
            setLname(res.data.user.lname)
            setPrefix(res.data.user.prefix_name)
            setSex(res.data.user.sex_name)
            setUserId(res.data.user.user_id)
      
        })
    },[])


    return (
        <>
            <Header />
            <div className='my-profile-box'>
                <div className='profile-card'>
                    <h3 className='myProfile-header'>Profile</h3> 
                    <div className='boder-bottom'></div>
                    <div className='logname'>
                    <p> user ID : {userId}</p>
                        <p>ชื่อ  : {prefix} {fname} {lname}</p>
                        <p>เพศ : "{sex}"</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyProfile
