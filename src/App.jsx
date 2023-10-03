import { useContext } from 'react'
import './App.css';
import { userContext, themeContext } from './context/Context';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  const { user } = useContext(userContext);
  const {currentTheme,themeToggleHandler} = useContext(themeContext);
  // console.log("user in app", user)
  // console.log('APP COMP')
  console.log("current tneme is", currentTheme);

  const toggleTheme = ()=>{
    themeToggleHandler(currentTheme === 'light' ? "dark" : "light");
  }
  return (
    <>
      <div className={`${currentTheme === "light" ? "light_theme" : "dark_theme"}`}>
        <button onClick={toggleTheme}>toggle theme</button>
        <h2>app</h2>
        {user ? "" : <Login />}
        {user ? <Profile /> : ""}
      </div>
    </>
  )
}

export default App;
