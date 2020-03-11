import React, {Component} from 'react';

class Login extends Component {
    constructor(){
        super(props);
        
    }
    render() {
        return(
            <center>
                <div className="loginForm">
                   <h1>Member Login</h1>
                   <form onSubmit={ props.onLoginSubmit }>
                     <input type="email" placeholder="Enter email" required />
                     <br/>
                    <input type="password" placeholder="Password" required />
                     <br/>
                   <button>Login</button>
                   </form>
                    <a href="#">New User? Click here to Register</a>
                </div>
            </center>
        )
    }
}

export default Login;