import React from "react";
import "./login.css";

const Login = ({ closeModal }) => {
  return (
    <div className="container">
      <div className="main">
        <h1 className="sign-up">Sign Up</h1>
        <label>Email</label>
        <input
          type="email"
          name="mail"
          placeholder=" example@.com"
        ></input>
        <label>Password</label>
        <input 
        type="password" 
        name="pwd" 
        placeholder=" Enter your password"
        ></input>
        <input type='submit' name="submit" value='Login'></input>
      </div>
    </div>
  );
};

export default Login;
