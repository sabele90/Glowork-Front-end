
import { createBrowserRouter, redirect } from 'react-router-dom'
import Root from '../layouts'
import LoginCard from '../pages/LoginCard/LoginCard'
import SignUpCard from '../pages/RegisterCard/SignUpCard'
import Home from '../pages/Home/Home'
import HomeUser from '../pages/HomeUser/HomeUser'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <LoginCard/>,
        },

      {
        path: '/register',
        element: <SignUpCard/>
      },
      {
        path: '/home_user',
        element: <HomeUser/>,
        loader: ()=> {
          if(!localStorage.token) {
              return redirect ("/")
          }else {
              return null
          }
    }
      },
    ]
  }
])

export default router