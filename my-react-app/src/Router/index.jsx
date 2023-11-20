
import { createBrowserRouter, redirect } from 'react-router-dom'
import Root from '../layouts'
import LoginCard from '../pages/LoginCard/LoginCard'
import SignUpCardUser from '../pages/RegisterCardUser/SignUpCardUser'
import Home from '../pages/Home/Home'
import HomeUser from '../pages/HomeUser/HomeUser'
import SingUpCardCompany from '../pages/RegisterCardCompany/SingUpCardCompany'
import Offers from '../pages/Offers/Offers'



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
        path: '/register_user',
        element: <SignUpCardUser/>
      },
      {
        path: '/register_company',
        element: <SingUpCardCompany/>
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
      {
        path: '/offers/:countryValue',
        element: <Offers/>
      },


    ]
  }
])

export default router