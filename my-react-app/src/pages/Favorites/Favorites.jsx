import React, { useEffect, useState } from 'react';
import OfferCard from '../../components/OfferCard/OfferCard';
import { getMyFavorites } from '../../services/user';

export default function Favorites() {
  const [favoriteOffers, setFavoriteOffers] = useState([]);

  async function getAllFavorites() {
   const result = await getMyFavorites()
   setFavoriteOffers(result)
  }

  useEffect(() => {
    getAllFavorites();
  }, []);


  return (
    <div>
      <h2>Favorites</h2>
      {favoriteOffers.map((offer, index) => (
        <OfferCard key={index} offer={offer.offer} />
      ))}
    </div>
  );
}
                        