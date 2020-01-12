//This is the sign up screen
import React, { useState } from "react";
import Axios from "axios";
import '../App.css';
import { Link } from "react-router-dom";



const SignUp=({history}) => {
    const[State,setState] =  useState({name :'',email :'',password :''})

    const onChange = (e)=>{
        setState({...State,[e.target.name] :e.target.value})
    };

    const onSubmit =async(e)=>{
        e.preventDefault();
        console.log (State.name);
        console.log (State.email);
        console.log (State.password);
       
        const data = {
            name:State.name,
            email:State.email,
            password:State.password
        }
        

        const response = await Axios.post("http://localhost:5001/users/register",data);
        console.log(response.data.success)
        if(response.data.success){
            history.push("/");
            
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
                
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="First name" onChange={onChange} name='name' />
                </div>

                
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={onChange} name='email' />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={onChange} name='password' />
                </div>

                <button type="submit" className="btn-submit" onClick={onSubmit}>Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/">sign in?</a>
                </p>

                </div>

            </form>
            </div>
          
        );
    
}
export default SignUp;