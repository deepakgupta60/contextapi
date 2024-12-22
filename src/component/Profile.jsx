import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const {userDetails}=useContext(UserContext)
  
    if(!userDetails) return <h1>Please login</h1>

    return (
    <div>
        Welcome {userDetails.username}
    </div>
  )
}

export default Profile