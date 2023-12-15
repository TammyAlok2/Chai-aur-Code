import React, { useContext, useState } from 'react'
import userContext from '../context/UserContext'

const Login = () => {
    const [username, setuserName] = useState('')
    const [passward, setPassward] = useState('')
    const [number, setNumber] = useState('')

    const {setUser} = useContext(userContext);

    const handleSubmit =(e)=>{
        e.preventDefault();
        setUser({username,passward,number});
    }
  return (
    <div>
      
      <input type='text ' value={username}  placeholder='enter your name ' onChange={(e)=> setuserName(e.target.value)}/>
      <input type='passward' value={passward}  placeholder='enter your passward ' onChange={(e)=> setPassward(e.target.value)}/>
      <input type='number ' value={number }  placeholder='enter your number  ' onChange={(e)=> setNumber(e.target.value)}/>
    <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login
