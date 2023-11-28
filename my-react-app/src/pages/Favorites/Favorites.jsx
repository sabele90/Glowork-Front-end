import React, { useContext, useEffect, useState } from "react";
import OfferCard from "../../components/OfferCard/OfferCard";
import { getUserFavorites } from "../../services/user";
import { LoginContext } from "../../Context/Login";

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
    <div>
      <h2>Favorites</h2>
      {favorites &&
        favorites.map((favorite, index) => (
          <OfferCard key={index} offer={favorite} />
        ))}
    </div>
  );
}
