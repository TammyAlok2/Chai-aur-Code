import React, { useEffect, useState } from 'react'
import { ThemeProvider } from './context/Theme'
import ThemeBtn from './Components/ThemeBtn';
import Card from './Components/Card';

const App = () => {
  const [themeMode,setthemeMode] = useState("light");


const lightTheme =()=>{
setthemeMode('light')

}

const darkTheme =()=>{
  setthemeMode('dark');
}

  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])
  return (

    <div>
      <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>
            </ThemeProvider>
    </div>
  )
}

export default App
