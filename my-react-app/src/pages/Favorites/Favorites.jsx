import React, { useContext, useEffect, useState } from "react";
import OfferCard from "../../components/OfferCard/OfferCard";
import { getUserFavorites } from "../../services/user";
import { LoginContext } from "../../Context/Login";
import { Card, CardContent } from "@mui/material";

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
    <Card
    sx={{
     
      margin: "6rem",
      padding: "1%",
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      borderRadius: "10px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    }}
    raised={true}
      >
      <CardContent style={{ display: "flex", gap: "1rem" }}>
  
 
    
    {favorites &&
      favorites.map((favorite, index) => (
        <OfferCard key={index} offer={favorite} />
      ))}


        </CardContent>

        </Card>

   </div>












    
  







  );
}
