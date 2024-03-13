import React from 'react'
import { Link } from 'react-router-dom'


function Frontend() {
  return (
    <>
    <div className='header2'>
      <a href='#' className="logo" style={{color:"gold", fontSize:"30px"}}>Cryptocurrency</a>
      <nav className='navbar'>
        <a href='#'>Home</a>
        <a href='#'>About </a>
        <a href='#'> Services</a>
        <a href='/login1'>Sign Up</a>
        <a href='/login1'>Login </a>
      </nav>
    </div>
    <div className='home'>
        <div className='home-content'>
        <h2>Hi, I'm Samuel</h2>
        <h3>Full Stack Developer</h3>
        <p>The Crypto Tracker project is a 
          comprehensive digital platform that
          monitors and displays real-time data
          on various cryptocurrencies.
         It provides users with
           up-to-date information
          on coin prices, market 
          trends, and portfolio 
          performance.
         The intuitive interface
         ensures seamless tracking, 
         enabling users to make informed decisions in the dynamic 
         world of cryptocurrency.</p>
         <div className='btn-box'>
            <a href='#'>Hire Me</a>
            <a href='#'>Let's Talk</a>
         </div>
         </div>

    </div>
    </>
    
  )
}

export default Frontend
