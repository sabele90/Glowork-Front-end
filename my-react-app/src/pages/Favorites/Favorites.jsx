import React, { useEffect, useState } from "react";
import OfferCard from "../../components/OfferCard/OfferCard";
import { getMyFavorites } from "../../services/user";

export default function Favorites() {
  const [favoriteOffers, setFavoriteOffers] = useState([]);

  async function getAllFavorites() {
    const result = await getMyFavorites();
    setFavoriteOffers(result);
  }

  useEffect(() => {
    getAllFavorites();
  }, []);

  const handleToggleFavorite = () => {
    getAllFavorites();
  };

  return (
    <div>
      <h2>Favorites</h2>
      {favoriteOffers.map((favorite, index) => (
        <OfferCard
          key={index}
          offer={favorite.offer}
          onToggleFavorite={handleToggleFavorite}
        />
      ))}
    </div>
  );
}
