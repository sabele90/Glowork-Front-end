import "./FavouriteIcon.css"
 import React from 'react'
 import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Button } from "@mui/material";

 
 export default function FavouriteIcon() {
    const [isFavorite, setIsFavorite] = React.useState(false);

    const toggleFavorite = () => {
      setIsFavorite((prev) => !prev);
    };
  
    return (
        <div>
        <Button onClick={toggleFavorite}>
          {isFavorite ? (
            <FavoriteIcon style={{ color: 'red' }} />
          ) : (
            <FavoriteBorderIcon style={{ color: 'red' }} />
          )}
       
        </Button>
      </div>
    );
  }