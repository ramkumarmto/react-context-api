import React, { useState, useContext } from 'react';
import { userContext } from '../context/Context';

function Login() {
    const [enteredUser, setEnteredUser] = useState({
        "username": "",
        "password": "",
    })
    const { setUser } = useContext(userContext);

    const inputHandle = (e) => {
        setEnteredUser((prev) => {
            return ({
                ...prev, [e.target.name]: e.target.value
            })
        })

    }
    const loginHandler = () => {
        // api call
        console.log(enteredUser)
        setUser(enteredUser)
        setEnteredUser({
            "username" : "",
            "password" : "",
        })
    }
    return (
        <div>
            <div>
                <input type="text" name='username' placeholder='username' value={enteredUser.username} onChange={inputHandle} />
            </div>
            <div>
                <input type="text" name='password' placeholder='password' value={enteredUser.password} onChange={inputHandle} />
            </div>
            <div>
                <button onClick={loginHandler}>Log in</button>
            </div>
        </div>
    )
}

export default Login;