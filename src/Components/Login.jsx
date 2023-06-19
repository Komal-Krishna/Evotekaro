import React,{useState} from "react";
import jwt_decode from "jwt-decode";

import "../App.css"

export const Login = (props) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    
    const handleClick = (e) => {
        e.preventDefault()
        console.log("clicked")

        const loginData = new URLSearchParams();
        loginData.append('username', username);
        loginData.append('password', password);
        


        fetch('http://localhost:8000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // eslint-disable-next-line
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: loginData
        }).then(response => {
            if (!response.ok) {
                throw new Error('Login request failed');
            }
            return response.json();
        })
            .then(data => {
                console.log('Login successful:', data);
                // checking for a given jwt token has admin access if yes forwart it to admin portal 
                const token = data.access_token;
                const decoded = jwt_decode(token);
                // store it in localstorege
                localStorage.setItem("SavedToken", 'Bearer ' + token);
                if (decoded.isAdmin) {
                    props.onFormSwitch("User")
                } else {
                    props.onFormSwitch("Dashboard")
                }
                // else to normal user portal
            })
            .catch(error => {
                console.log('Login error:', error.message);
                alert('Invalid Username or Password');
            });
}

    

    return (
        <div className="Login_background">
            <div className="box1">
                <div className="head">
                    <p>Sign IN</p>
                </div>
                <div className="para">
                    <p>Please enter your credentials provided by the IIITK management which are used for LMS</p>
                </div>
            </div>

            <div className="Box2">
                <div className="auth-form-container">
                    <form className="login-form">
                    <input className="input" type="name" placeholder="NAME" id="name" name="name" />
                        <br></br>
                        <input className="input" type="email" id="username" required value={username}
                onChange={(e) => (setUsername(e.target.value))} placeholder="EMAIL ADDRESS"  name="email" />
                        <br></br>
                        <input className="input" type="password" placeholder="PASSWORD" id="password" name="password"  required value={password}
                        onChange={(e) => (setPassword(e.target.value))}/>
                        <br></br>
                        <br></br>
                        <button class="button si" type="button" onClick={(e) => handleClick(e) }>Sign In</button>
                    </form>
                </div>
            </div>            
        </div>
    )
}