import { Card, CardContent } from "@mui/material";
import "./SubscriptionsProfile.css"
import React, { useEffect, useState } from 'react'
import OfferCard from "../../components/OfferCard/OfferCard";
import { getUserContactInfo } from "../../services/user";

export default function SubscriptionsProfile() {
    const [user, setUser] = useState({});

    async function getUserInfo() {
      const info = await getUserContactInfo(localStorage.getItem("userId"));
  
      setUser(info);
    }
  
    useEffect(() => {
      getUserInfo();
  
    }, []);
  
    return (
   <>
        <div className="containerSubscriptionsProfile">
        <img
            className="backgroundTopSubscriptionsProfile"
            src="/src/assets/images/backgroundTop.png"
          ></img>
        <Card
        sx={{
            margin: "6rem",
            padding: "1%",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            "@media screen and (max-width: 700px)": {
            
         flexDirection: "column",
              width: "90%", // Cambiado el ancho para ocupar más del espacio disponible
              margin: "2rem auto"
             
            },
        }}
        raised={true}
          >
          
            
             <div className="containerCardSubscriptions">
      
          {user.offers?.map((subscription,i) => {
           return (<OfferCard offer={subscription}/>)
          })}
  
            </div>
  
            </Card>
       
         </div>
         </>
    )
}
