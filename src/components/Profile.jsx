import React, { useContext} from 'react';
import { userContext } from '../context/Context';

function Profile() {
    const { user} = useContext(userContext);

    console.log("user in profile", user)
  return (
    <div>
       { user ? (<p>{user.username}</p>) : (<p>Not logged In!</p>) }
    </div>
  )
}

export default Profile;