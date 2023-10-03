import React, { useContext} from 'react';
import { userContext } from '../context/Context';

function Profile() {
    const { user, logout } = useContext(userContext);

    // console.log("user in profile", user)

    const logoutHandler = ()=>{
        logout()

    }
  return (
    <div>
       { user ? (<p>{user.username}</p>) : (<p>Not logged In!</p>) }
       { user ? <button onClick={logoutHandler}>logout</button> : null}
    </div>
  )
}

export default Profile;