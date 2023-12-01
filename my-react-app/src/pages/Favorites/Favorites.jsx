import React, { useContext, useEffect, useState } from "react";
import OfferCard from "../../components/OfferCard/OfferCard";
import { getUserFavorites } from "../../services/user";
import { LoginContext } from "../../Context/Login";
import { Card, CardContent } from "@mui/material";
import "./Favorites.css"
export default function Favorites() {
  const [favoriteOffers, setFavoriteOffers] = useState([]);
  const { userId, favorites, setFavorites } = useContext(LoginContext);

  async function getAllFavorites() {
    const result = await getUserFavorites(userId);
    setFavoriteOffers(result);
    setFavorites(result);
  }

  useEffect(() => {
    getAllFavorites();
  }, []);

  return (

    <div className="containerFavorites">
       <img
            className="backgroundTopFavorites"
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
      '@media screen and (max-width: 700px)': {
        flexDirection: "column",
        width: "90%", 
        margin: "2rem auto"
       
  
       
      },
    }}
    raised={true}
      >
   
       <div className="containerCardFavorites">
 
    
    {favorites &&
      favorites.map((favorite, index) => (
        <OfferCard key={index} offer={favorite} />
      ))}


</div>

        </Card>

   </div>












    
  







  );
}
