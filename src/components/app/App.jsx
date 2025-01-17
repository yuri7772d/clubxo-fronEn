
import axios from 'axios'
import { useEffect, useState } from 'react'
import Header from '../header/Header';
import JoinClub from '../joinClub/JoinClub';
import './App.css'
import MyProfile from '../myProfile/MyProfile';
import CreateClub from '../createClub/CreateClub';
import MsgBox from '../msg-box/MsgBox';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ClubMember from '../clubMember/ClubMember';




function App() {

  const [clubName, setClubName] = useState()
  const [clubComment, setClubComment] = useState()
  const [clubStatus, setClubStatus] = useState()
  const [clubId, setClubId] = useState()


const handleOnClickOutBtn =(e)=>{
    e.preventDefault();
    const token = localStorage.getItem('token');
    axios.post('https://apiclubxo.vercel.app/outClub',{}, { headers: { Authorization: `Bearer ${token}` } })
      .then(res => {

        if (res.data.status == 'ok') {
         window.location = '/join'
          return;
        }
        alert(res.data.msg)
      })




}


const handleOnClickDeleteClubBtn = (e) =>{
  e.preventDefault();

  const token = localStorage.getItem('token');
  axios.post('https://apiclubxo.vercel.app/deleteClub',{}, { headers: { Authorization: `Bearer ${token}` } })
    .then(res => {

      if (res.data.status == 'ok') {
       window.location = '/join'
        return;
      }
      alert(res.data.msg)
    })

}





  useEffect(() => {



    const token = localStorage.getItem('token');

    axios.get('https://apiclubxo.vercel.app/clubProfile', { headers: { Authorization: `Bearer ${token}` } })
      .then(res => {
        if (!res.data.club) {
         window.location = '/join'
          return;
        }

        setClubName(res.data.club.club_name)
        setClubId(res.data.club.club_id)
        setClubComment(res.data.club.club_comment)
        setClubStatus(res.data.club.club_status_name)
        if(!(res.data.club.club_status_name == 'เจ้าของชมรม')){
          document.getElementById("btnDeletClub").style.display = "none";
        }
      })

        
  }, [])

  return (
    <div className='app-body'>

      <Header />
      <div className='club-profile-card'>
      <div className='d1'>  <h3 className='club-name-profile'>{clubName} : ({clubStatus}) </h3> <button onClick={handleOnClickDeleteClubBtn} id='btnDeletClub'  className='club-delete-btn'>Delete Club</button></div>
        <div className='club-comment-profile'>
          <h>คำอธิบาย </h>
          <p>{clubComment}</p>
        </div>
        <div className='div-so'>
        
        <button onClick={handleOnClickOutBtn} className='club-out-btn'>Out Club</button>
        </div>
       
      </div>
      <ClubMember/>



    </div>
  )
}


export default App
