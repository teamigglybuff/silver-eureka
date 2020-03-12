import React, {Component} from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {login} from '../actions/user-actions.js';
//import * as actions from '../actions/user-actions.js';

//actions.login
 

function Login(props){
   const dispatch = useDispatch()
 
    const onLoginSubmit = () => {
        //grab input value
        //import login function 
         let username = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        
       dispatch(login(username, password))
      }

   return(
            <center>
                <div className="loginForm">
                   <h1>Member Login</h1>
                     <input id="email" type="email" placeholder="Enter email" required />
                     <br/>
                    <input id="password" type="password" placeholder="Password" required />
                     <br/>
                   <button onClick={onLoginSubmit}>Login</button>
                  
                    <a href="#">New User? Click here to Register</a>
                </div>
            </center>
        )
    }


export default Login;