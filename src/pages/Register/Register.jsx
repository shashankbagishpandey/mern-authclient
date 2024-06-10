import React from "react";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, password } = data;
    try {
      const { data } = await axios.post("/api/register", {
        name,
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("login successfull");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {/* <form action="" onSubmit={registerUser}>
        <label htmlFor=""> Name</label>
        <input
          type="text"
          placeholder="enter name"
          value={data.name}
          onChange={(e) => {
            setData({ ...data, name: e.target.value });
          }}
        />

        <label htmlFor=""> Email</label>
        <input
          type="email"
          name=""
          id=""
          placeholder="enter the email"
          value={data.email}
          onChange={(e) => {
            setData({ ...data, email: e.target.value });
          }}
        />

        <label htmlFor=""> passowrd</label>
        <input
          type="password"
          placeholder="enter password"
          value={data.password}
          onChange={(e) => {
            setData({ ...data, password: e.target.value });
          }}
        />
        <button type="submit">submit</button>
      </form> */}

      <div className="wrapper">
        <h1 className="h1Reg">Sign Up</h1>
        <h4 className="h4Reg">It's free and only takes a minute</h4>
        <form action="" onSubmit={registerUser}>
          <label className="label">Name</label>
          <input
            className="inputReg"
            type="text"
            placeholder="enter name"
            value={data.name}
            onChange={(e) => {
              setData({ ...data, name: e.target.value });
            }}
          />

          <label className="label">Email</label>
          <input
            className="inputReg"
            type="email"
            name=""
            id=""
            placeholder="enter the email"
            value={data.email}
            onChange={(e) => {
              setData({ ...data, email: e.target.value });
            }}
          />

          <label className="label">Password</label>
          <input
            className="inputReg"
            type="password"
            placeholder="enter password"
            value={data.password}
            onChange={(e) => {
              setData({ ...data, password: e.target.value });
            }}
          />

          <button className="btn dark-btn " type="submit">submit</button>
        </form>
        <p className="pReg">
          By clicking the Submit button,you agree to our <br />
          <a href="#">Terms and Condition</a> and <a href="#">Policy Privacy</a>
        </p>
        <p className="paraR-2">
          Already have an account?{" "}
          <Link className="hrefR" to="/login">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
