import React, { useState } from 'react'

function Login() {

    const loginHandler = ()=>{
        // api call will happen
    }
  return (
    <div>
        <div>
            <input type="text" placeholder='username' />
        </div>
        <div>
            <input type="text" placeholder='password' />
        </div>
        <div>
           <button onClick={loginHandler}>Log in</button>
        </div>
    </div>
  )
}

export default Login