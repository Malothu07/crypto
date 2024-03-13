import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import user_email from '../components/Assets/email.jpg'
import user_icon1 from '../components/Assets/person.jpg';
import user_password from '../components/Assets/password.avif';



const Login1 = () => {
  const navigate = useNavigate();
  const [action, setAction] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUpClick = () => {
    if (action === "Sign Up") {
      setName("");
      setEmail("");
      setPassword("");
    }
    setAction(action === "Login" ? "Sign Up" : "Login");
  };

  const handleLogin = () => {
    // Basic login validation for demonstration purposes
    if (email === "samuel@gmail.com" && password === "samuel") {
      // Successful login, navigate to the dashboard
      navigate("/home");
    } 
    else {
      setError("Invalid credentials. Please try again.");
    }
  };


  return (
    <div className='container1'>
      <div className='header1'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className='input'>
            <img src={user_icon1} alt='' />
            <input
              type='text'
              placeholder='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        )}
        <div className='input'>
          <img src={user_email} alt='' />
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='input'>
          <img src={user_password} alt='' />
          <input
            type='password'
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      {action === "Sign Up" ? (
        <div></div>
      ) : (
        <div className='forgot-password'>
          Lost Password?<span>Click here!</span>
        </div>
      )}
      <div className='submit-container'>
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={handleSignUpClick}
        >
          Sign Up
        </div>
        
        
        {/* <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => setAction("Login")}
        >
            Login
        </div> */}
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={handleLogin}
        >
          Login
        </div>
      </div>
      {error && <div className='error-message'>{error}</div>}
    </div>
  );
};

export default Login1;














