import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'
const Login = () => {
    const [userName, setUsername] = useState('');
    const [passward, setPassward] = useState('');
 
    const {setUser} = useContext(UserContext)
    const handleSubmit =(e)=>{
e.preventDefault()
setUser({userName,passward})
    }
  return (
    <div >
      <h2>Login</h2>
      <input type="text" name="" id="" placeholder='username'  value={userName} onChange={(e)=>setUsername(e.target.value)}/>
      <input type="text" name="" id="" placeholder='passward' value={passward} onChange={(e)=>setPassward(e.target.value)}  />
      <button onClick={handleSubmit}> Submit </button>
    </div>
  )
}

export default Login
