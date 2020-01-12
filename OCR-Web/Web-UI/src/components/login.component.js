//This is the sign in screen

import React, { useState } from "react";
import Axios from "axios";
import '../App.css';
import { Link } from "react-router-dom";



const SignIn=({history}) => {
    const[State,setState] =  useState({email :'',password :''})

    const onChange = (e)=>{
        setState({...State,[e.target.name] :e.target.value})
    };

    const onSubmit =async(e)=>{
        e.preventDefault();

        console.log (State.email);
        console.log (State.password);
       
        const data = {
    
            email:State.email,
            password:State.password
        }
        

        const response = await Axios.post("http://localhost:5001/users/login",data);
        console.log(response)
        if(response){
            
            history.push("/fileUploader");
            alert("Successfully LoggedIn");
            
        }
        else{
            alert("Incorrect username or password! Input Correct username and password")
        }
    }
        return (
            <div className = "full">
                <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                    <div className="container">
                        <Link className="navbar-brand" to={"/"}>OCR PROJECT</Link>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/"}>Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav> 
            <form>
                <div className = "auth-wrapper">
                
                <h3>Sign In</h3>

                
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={onChange} name='email' />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={onChange} name='password' />
                </div>

                <button type="submit" className="btn-submit" onClick={onSubmit}>Sign In</button>
               

                </div>

            </form>
            </div>
          
        );
    
}
export default SignIn;