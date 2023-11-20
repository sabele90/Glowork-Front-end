//app.jsx

import { RouterProvider } from 'react-router-dom'
import ButtonLoginHeader from './components/ButtonLoginHeader/ButtonLoginHeader'
import './App.css'
import router from './Router'
import { useState } from 'react'
import { LoginContext } from './Context/Login'



function App() {

  const [login, setLogin] = useState(true)
  const obj = {
    login,
    setLogin
  }


  return (
    <LoginContext.Provider value = {obj}>
    <RouterProvider router={router} />
  
    {/* <ButtonLoginHeader /> */}

    </LoginContext.Provider>
  )
}


export default App
