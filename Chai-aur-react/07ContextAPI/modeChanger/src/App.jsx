import React from 'react'
import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContextProvider from './context/UserContextProvider'

const App = () => {
  return (
    <UserContextProvider>
      <h1> Hello to usecontext </h1>
    <Login/>
    <Profile/>

    </UserContextProvider>
  )
}

export default App
