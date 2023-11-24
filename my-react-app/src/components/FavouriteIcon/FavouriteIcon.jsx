import "./FavouriteIcon.css";
import React, { useEffect } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Button } from "@mui/material";
import { addToFavorites, deleteFromFavorites } from "../../services/user";

export default function FavouriteIcon({ onAddToFavorites ,offer}) {

  const [isFavorite, setIsFavorite] = React.useState(false);

  const toggleFavorite = () => {
    if (!isFavorite) {
      setIsFavorite(true);
      onAddToFavorites(offer); // Add offer to favorites
    } else {
      setIsFavorite(false);
      deleteFromFavorites(offer); // Remove offer from favorites
    }
  };
  async function getFavorites() {
    if (onclick) {
      const addFavorite = await addToFavorites(offer_id);
      setIsFavorite(addFavorite);
    } else {
      const deleteFavorite = await deleteFromFavorites(offer_id);
      setIsFavorite(deleteFavorite);
    }
  }

  useEffect(() => {
    getFavorites();
  }, []);


  return (
    <div>
      <Button onClick={toggleFavorite}>
        {isFavorite ? (
          <FavoriteIcon style={{ color: "red" }} />
        ) : (
          <FavoriteBorderIcon style={{ color: "red" }} />
        )}
      </Button>
    </div>
  );
}
