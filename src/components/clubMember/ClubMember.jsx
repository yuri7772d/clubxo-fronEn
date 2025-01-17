import React, { useEffect, useState } from 'react'
import './clubMember.css'
import axios from 'axios';
import { FaPen } from "react-icons/fa";

function ClubMember() {
    const [clubList, setClubList] = useState([]);

    const [logmember, setLogmember] = useState([])
   
    useEffect(() => {
        const token = localStorage.getItem('token');
         
        axios.get('https://apiclubxo.vercel.app/member', { headers: { Authorization: `Bearer ${token}` } })
            .then(res => {

                if (!res.data.members) {
                    window.location = '/join'
                    return;
                }
              
               var List = res.data.members.map((member) =>

                    <div className='clup-member-card'>
                       
                       <p>({member.user_id}) : {member.prefix_name} {member.fname} {member.lname}</p>
                       {member.club_status_name}
                    
                    </div>
                       
                )
                setLogmember(List);
                
            })
            
    }, [])
   


    return (
        <div className='club-Member-card'>
            <h className='club-member-header'>  สมาชิกในชมรม</h>
            {logmember}
        </div>
    )
}

export default ClubMember
