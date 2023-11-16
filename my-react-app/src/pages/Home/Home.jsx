import { Button } from '@mui/material'

import { useNavigate } from 'react-router-dom'
//{localStorage.rol === "admin" && <Button onClick= {onGetAllUsers} variant='contained'>Get all users</Button>}
export default function Home() {

  const navigate = useNavigate()

  function onLogout(){
      localStorage.removeItem("token")
      navigate("/")
  }
/*   function onGetAllUsers(){
      navigate("/home/users")

  } */
return (
  <>
  <div>Home</div>
  <Button onClick= {onLogout} variant='contained'>Logout</Button>
  
  </>
)
}
