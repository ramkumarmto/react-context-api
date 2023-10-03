import React, { useState} from 'react'
import { userContext, themeContext } from './Context'

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

export const ThemeContextProvider  = ({ children })=>{
    const [ currentTheme, setCurrentTheme] = useState('light');

    const themeToggleHandler = ()=>{
        setCurrentTheme(currentTheme === "light" ? "dark" : "light")
    }
    return (
        <themeContext.Provider value={{currentTheme, themeToggleHandler}}>
            {children}
        </themeContext.Provider>
    )

}

export default ContextProvider;