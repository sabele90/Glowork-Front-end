import "./FavouriteIcon.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Button } from "@mui/material";
import { addToFavorites, deleteFromFavorites } from "../../services/user";

export default function FavouriteIcon({ isFavorite, onToggleFavorite, offer }) {
  const { favorites, setFavorites } = useLoginContext();

  const handleClick = async () => {
    try {
      // Lógica para agregar o quitar favoritos
      if (isFavorite) {
        // Si es un favorito, quitarlo de la lista
        setFavorites((prevFavorites) =>
          prevFavorites.filter((fav) => fav.id !== offer.id)
        );
        await deleteFromFavorites(offer);
      } else {
        // Si no es un favorito, agregarlo a la lista
        setFavorites((prevFavorites) => [...prevFavorites, offer]);
        await addToFavorites(offer);
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
