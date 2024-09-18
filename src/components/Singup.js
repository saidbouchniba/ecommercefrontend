import React from 'react'

function Signup() {
  return (
    <div id="wrapper">
    <div id="left">
      <div id="signin">
        <div className="logo">
          <img
            src="https://image.ibb.co/hW1YHq/login-logo.png"
            alt="Sluralpright"
          />
        </div>
        <form style={{height:"350px"}}>
        <div>
            <label>Name & Surname</label>
            <input type="text" className="text-input" />
          </div>
<div>
            <label>Email</label>
            <input type="email" className="text-input" />
          </div>
          <div>
            <label>Phone</label>
            <input type="number" className="text-input" />
          </div>
          <div>
            <label>Adress</label>
            <input type="text" className="text-input" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" className="text-input" />
          </div>
          <button type="submit" className="primary-btn">
            Sign Up
          </button>
        </form>
      </div>
        <div className="links">
          <a style={{color:"white", fontSize:"1rem", marginLeft:"50px", marginTop:"400px"}}  href="#">Forgot Password</a>
        </div>
    </div>
    <div id="right">
      <div id="showcase">
        <div className="showcase-content">
          <h1 className="showcase-text">
            Let's create the future <strong>together</strong>
          </h1>
          <a href="#" className="secondary-btn">
            Start a FREE 10-day trial
          </a>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Signup