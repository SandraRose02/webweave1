import React from 'react'
import './Login.css'
import axios from 'axios';
import { useState } from 'react';


const SignUp = () => {
  const [fname, setfname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/webapp/signup', {
        fname,
        email,
        password
      });
      const{status}=response.data;
      alert(status);
      // Assuming the backend returns a token upon successful login
      localStorage.setItem('token', response.data.token);
      // Redirect or update UI
    } catch (error) {
      // Handle login failure (e.g., display error message)
      console.error('Login failed:', error);
    }
  };



  return (
    <div>
      <div className="middlebox login">

        <div className="container">
          <div className='content'>
            <h1> SIGN UP</h1>
            <h6> CREATE YOUR ACCOUNT</h6>
            <form onSubmit={handleSubmit}>
              <label for="fname">Full Name:<span >*</span></label><br />
              <input

                type="text"
                placeholder="Fullname"
                value={fname}
                onChange={(e) => setfname(e.target.value)}
              />
              <br />

              <label for="email">Email:<span >*</span></label><br />

              <br /><input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />

              <label for="password">Password:<span >*</span></label><br />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              /> <br />

              <input type="submit" value="SignUp" style={{ color: ' white ', background: ' #55a1f7' }} /><br />
              Don't you have an account? <a href="./LoginPage" >login</a>
            </form>
          </div>

        </div>

      </div>
    </div >
  )
}

export default SignUp