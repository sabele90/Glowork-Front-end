//buttonloginheader.jsx

import { Button, ButtonGroup } from '@mui/material';
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import RegisterUser from '../Header/SplitButtom/SplitButtom'
import { LoginContext } from '../../Context/Login';

export default function ButtonLoginHeader() {

    const {login, setLogin} =useContext(LoginContext)
    const navigate = useNavigate();

    const handleLogout = () => {
      localStorage.removeItem("token");
      setLogin(false);
      navigate("/");
    };

  return (
    <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            <RegisterUser key="RegisterUser" />

            {login ? (
              <Button
                key="logoutButton"
                variant="contained"
                onClick={handleLogout}
              >
                Logout
              </Button>
            ) : (
              <Link
                key="loginLink"
                to="/login"
                style={{ textDecoration: "none" }}
              >
                <Button variant="contained">Login</Button>
              </Link>
            )}
          </ButtonGroup>
    
  )
}
