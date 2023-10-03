import { useContext } from 'react'
import './App.css';
import ContextProvider from './context/ContextProvider';
import { userContext } from './context/Context';



function App() {
  const ctx = useContext(userContext);
console.log()

  return (
    <>
      <ContextProvider>
        <div>
        <h2>app</h2>
        </div>
      </ContextProvider>
    </>
  )
}

export default App
