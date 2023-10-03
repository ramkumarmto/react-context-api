import React, { useState} from 'react'
import { userContext } from './Context'

function ContextProvider({ children }) {
    const [ user, setUser] = useState();
  return (
    <userContext.Provider value={{ user, setUser}}>
        { children }
    </userContext.Provider>
  )
}

export default ContextProvider;