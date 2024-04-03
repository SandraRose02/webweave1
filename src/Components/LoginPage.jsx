import React from 'react'
import './Login.css'
import { useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



function LoginPage() {
    const LoginPage = () => {

        const [email, setemail] = useState('');
        const [password, setpassword] = useState('');
    }
        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                const response = await axios.post('http://localhost:3001/api/webapp/login', {
                   // email,
                    //password
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
        }
    
    
    
    
    
    
    
        return (
            <div>
                <div  className='mainbody'>
                    <div className="middlebox login">
                        <div className="container">
                            <div className="login-uphalf">
                                <div className="login-welcome">
                                    <h2>Welcome!</h2>
                                    <p>Create your account.<br />For Free!</p> <a href="/SignUp" className="login-welcome-bttn">Sign Up</a>
                                </div>
                            </div>
                            <div className="login-upright">
                                <div className="login-form">
                                    <div className="login-container">
    
                                        <h2>Login</h2>
                                        <form action="./LoginPage"onSubmit={handleSubmit}>
                                            <p> <label>Email address<span>*</span></label> <input
                                                type="email"
                                                placeholder="Email"
                                                //value={email}
                                                //onChange={(e) => setemail(e.target.value)}
                                            /> </p>
                                            <p> <label>Password<span >*</span></label> <input
                                                type="password"
                                                placeholder="Password"
                                                //value={password}
                                               // onChange={(e) => setpassword(e.target.value)}
                                            /></p>
                                            <p> <input type="submit" value="Sign In" /> </p>
    
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
            </div>
        );
    

}


export default LoginPage;