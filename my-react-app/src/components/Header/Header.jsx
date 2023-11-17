import './Header.css'
import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { withTheme } from '@emotion/react';
import { red } from '@mui/material/colors';
import { CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor: 'white', display:'flex',justifyContent:'space-evenly'}}>
   
        <Toolbar sx={{backgroundColor: 'white', display:'flex',justifyContent:'space-between'}}>

        <Link to="/" style={{ textDecoration: 'none' }}>
            <Button variant="contained">Home</Button>
          </Link>

          <Link to="/login" style={{ textDecoration: 'none' }}>
            <Button variant="contained">login</Button>
          </Link>
          <Link to="/register_user" style={{ textDecoration: 'none' }}>
            <Button variant="contained">REGISTER AS VOLUNTEER</Button>
          </Link>
          <Link to="/register_company" style={{ textDecoration: 'none' }}>
            <Button variant="contained">REGISTER AS COMPANY</Button>
          </Link>

          <CardActions  sx={{ display:"flex", justifyContent:"flex-end"}}>
          <Link size="large" color="primary" variant="contained">
            Have you not registered yet?
          </Link> 
          </CardActions>

        </Toolbar>
      </AppBar>
    </Box>
  );
}