import React, { useEffect, useState } from 'react'
import './joinClub.css'
import Header from '../header/Header'
import axios from 'axios'
import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';
function JoinClub() {


  const [clubList, setClubList] = useState([]);

  const handleOnJoin = (e) => {
    e.preventDefault();
    const clubId = e.target.id;
    const token = localStorage.getItem('token');
    axios.post('https://apiclubxo.vercel.app/join', { clubId: clubId }, { headers: { Authorization: `Bearer ${token}` } })
      .then(res => {

        if (res.data.status == 'ok') {
          window.location = '/'
          return;
        }
        alert(res.data.msg)
      })
  }


  useEffect(() => {
    const token = localStorage.getItem('token');
    var List;





    axios.get('https://apiclubxo.vercel.app/clubList', { headers: { Authorization: `Bearer ${token}` } })
      .then(res => {
        const clubList = res.data

        if (!clubList.clubList) {

          window.location = '/'
          return;
        }



        window.List = clubList.clubList.map((item) =>

          <div className='clup-card'>
            <div>
              <h3 className='club-name '>{item.club_name}</h3>
              <button className='join-button' id={item.club_id} onClick={handleOnJoin}>Join Club</button>
            </div>

            <p className='club-comment'>คำอธิบาย : {item.club_comment}</p>

          </div>

        )
        setClubList(window.List)
      })
  }, [])


  //  container.render(myList);



  return (



    <div >
      <Header />
      <div className='clubjoin-box'>


        <button className='create-button'><Link to='/create'> Create Club </Link></button>
        <div className='head-comment'> <h2>คุณยังไม่ได้เข้าร่วมชมรม</h2></div>
        <div id='log_List' className='log-club-name'></div>
        {clubList}
      </div>
    </div>)
}

export default JoinClub
