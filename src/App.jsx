import { useContext } from 'react'
import './App.css';
import { userContext } from './context/Context';
import Login from './components/Login';
import Profile from './components/Profile';



function App() {
  const { user } = useContext(userContext);
  console.log("user in app", user)
  console.log('APP COMP')

  return (
    <>
      <div>
        <h2>app</h2>
        {user ? "" : <Login />}
        {user ? <Profile /> : ""}
      </div>
    </>
  )
}

export default App
