
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import App from './components/app/App.jsx'

import Register from './components/register/Register.jsx'
import Login from './components/login/Login.jsx';
import Header from './components/header/Header.jsx';
import JoinClub from './components/joinClub/JoinClub.jsx';
import CreateClub from './components/createClub/CreateClub.jsx';
import MyProfile from './components/myProfile/MyProfile.jsx';
import MsgBox from './components/msg-box/MsgBox.jsx';

createRoot(document.getElementById('root')).render(

  <BrowserRouter>

      <Routes>
        
        <Route path="/" element={<App/> }/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/create" element={<CreateClub/>}/>
      <Route path="/join" element={<JoinClub/>}/>
      <Route path="/myProfile" element={<MyProfile/>}/>
      <Route path="/club" element={<App/>}/>
      <Route path="/msgBox" element={<MsgBox/>}/>
       
       
      
      </Routes>
   
    </BrowserRouter>
)
