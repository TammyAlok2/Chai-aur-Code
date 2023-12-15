import React, { useContext } from 'react'
import userContext from '../context/UserContext'

const Profile = () => {
    const {user} = useContext(userContext)

    if(!user) return <h1> plz sign in </h1>;
  return (
    <div>
      Welcome {user.username }
      your number {user.number}
    </div>
  )
}

export default Profile
