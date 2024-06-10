import React from "react";
import { UserContext } from "../../context/userContext";
import { useContext } from "react";
import axios from 'axios'
import {toast} from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'
import { useEffect } from "react";

function Dashboard() {
    const navigate = useNavigate()
    const { user } = useContext(UserContext);
    const logoutUser =async (e)=>{
        console.log('logout')
        const response =  await axios.get('/logout', {
        user

    });

    if (response.status === 200) {
        
      navigate("/login");
    } 

    }

    useEffect(() => {
       
      }, []);

    

  
    return (
        <div>
          <h1>Dashboard</h1>
          {console.log({user})}
          {!!user && <h2>Hi {user.name}!</h2>}

          {user?<button onClick={logoutUser}>logout</button>:''} 
          
    
        </div>
      );
}

export default Dashboard
