import { Button, Card, CardContent, CardHeader, Typography } from "@mui/material";
import "./UserProfile.css"

import React, { useEffect, useState } from 'react'
import { getUserContactInfo } from "../../services/user";

export default function UserProfile() {

const [user,setUser] =  useState({})
console.log(user)
async function getUserInfo(){
  const info = await getUserContactInfo(data.user)
  setUser(info)
}
useEffect(()=> {
  getUserInfo()
},[])


  return (
      <>
    
        <header className="headerUserProfile">
        <img
          className="photoHeaderProfile"
          src="/src/assets/images/headerProfile.png"
         
        ></img>
      
        </header>

          <div className="containerProfile">
          <Card
            sx={{
              width: "100%",
              margin:"4rem",
              padding: "5%",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
              alignItems: "center",
            }}
            raised={true}
          >
            <CardContent>
            <CardHeader title={user.name}></CardHeader>
            <Typography variant="body2">PROFILE</Typography>
            <Typography variant="body1">{''}</Typography>
            <Typography variant="body1">{''}</Typography>
            <Typography variant="body1">{''}</Typography>
            <Typography variant="body1-"> {''}</Typography>
            </CardContent>
          
          
          </Card>

          </div>
          </>
   
  );
}