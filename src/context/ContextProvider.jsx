import React, { useState} from 'react'
import { userContext } from './Context'

function ContextProvider({ children }) {
    const [ user, setUser] = useState();

    const login = (userData)=>{
        setUser(userData)

    }
    const logout = ()=> {
        setUser(null)

    }
  return (
    <userContext.Provider value={{ user, setUser, login, logout}}>
        { children }
    </userContext.Provider>
  )
}

export default ContextProvider;