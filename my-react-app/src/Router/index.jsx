
import { createBrowserRouter } from 'react-router-dom'
import Root from '../layouts'
import LoginCard from '../pages/LoginCard/LoginCard'
import SignUpCard from '../pages/RegisterCard/SignUpCard'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    children: [
      {
        path: '/',
        element: <LoginCard/>
      },
      {
        path: '/register',
        element: <SignUpCard/>
      }
    ]
  }
])

export default router