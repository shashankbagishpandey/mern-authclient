import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import './Login.css'

function Login() {
  
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const { data } = await axios.post("/api/login", {
        email,
        password,
      });

      if (data.error) {
        console.log(data)
        toast.error(data.error);
      } else {
        setData({});
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {/* <form action="" onSubmit={loginUser}>
      <label> Email</label>
        <input type="email" placeholder='enter the email' value={data.email} onChange={(e)=>{setData({...data,email:e.target.value})}} />
        
        <label> passowrd</label>
        <input type="password" placeholder='enter password'  value={data.password} onChange={(e)=>{setData({...data,password:e.target.value})}}/>
        <button type='submit'>submit</button>
      </form> */}

      <div className="wrapper">
        <h1 className="h1">Hello Again!</h1>
        <p className="prag">
          Welcome back you've <br /> been missed!
        </p>
        <form action="" onSubmit={loginUser}>
          <input type="email" className="input" placeholder='enter the email' value={data.email} onChange={(e)=>{setData({...data,email:e.target.value})}} />
          <input type="password"  className="input"  placeholder='enter password'  value={data.password} onChange={(e)=>{setData({...data,password:e.target.value})}}/>
          {/* <p className="recover">
            <a href="#">Recover Password</a>
          </p> */}
          <button type='submit' className="btn dark-btn">Sign in</button>
          
        </form>
       
        <div className="not-member">
          Not a member? <Link className="href" to='/register'>Register Now</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
