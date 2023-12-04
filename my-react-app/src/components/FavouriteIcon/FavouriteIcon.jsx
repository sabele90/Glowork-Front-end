import "./FavouriteIcon.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Button } from "@mui/material";
import { addToFavorites, deleteFromFavorites } from "../../services/user";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../Context/Login";

export default function FavouriteIcon({ offer }) {
  const { favorites, setFavorites } = useContext(LoginContext);
  const [isFavorite, setIsFavorite] = useState(null);

  useEffect(() => {
    setIsFavorite(isFavoriteOffer());
  }, [favorites, isFavorite]);

  const isFavoriteOffer = () => {
    return favorites.some((favorite) => favorite.id === offer.id);
  };

  const handleClick = async () => {
    try {
      const isInfavorites = isFavoriteOffer();

      if (isInfavorites) {
        const newFavorites = favorites.filter((favorite) => favorite != offer);
        setFavorites(newFavorites);
        await deleteFromFavorites(offer.id);
        setIsFavorite(false);
      } else {
        setFavorites((prevFavorites) => [...prevFavorites, offer]);
        await addToFavorites(offer.id);
        setIsFavorite(true);
      }
    } catch (error) {
      console.error("Error toggling favorite:", error);
    }
  };

  return (
    //traerme el contexto ,  comprobar si esta o no

    <div>
      <Button onClick={handleClick}>
        {isFavorite ? (
          <FavoriteIcon style={{ color: "red" }} />
        ) : (
          <FavoriteBorderIcon style={{ color: "red" }} />
        )}
      </Button>
    </div>
  );
}
