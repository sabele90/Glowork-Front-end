import OfferCard from "../../components/OfferCard/OfferCard";
import "./Offers.css";
import { useEffect, useState } from "react";
import { getOffersByContinent, getOffersByCountry } from "../../services/offer";
import React from "react";
import { useParams, useLocation } from "react-router-dom";
import CountryList from "../../components/CountryList/CountryList";

export default function Offers() {
  const [offers, setOffers] = useState([]);
  const [favoriteOffers, setFavoriteOffers] = useState([]);
  const { countryId, continentValue } = useParams();
  const location = useLocation();

  // CONTINENT VALUE SE RECIBE CLICKANDO EN EL MAPA Y ES EL CÓDIGO
  // DEL CONTINENTE

  const handleAddToFavorites = (offer) => {
    // Agregar lógica para evitar agregar la misma oferta varias veces
    if (!favoriteOffers.some((favOffer) => favOffer.id === offer.id)) {
      setFavoriteOffers((prevFavorites) => [...prevFavorites, offer]);
    }
  };


  async function getAllOffers() {
    if (location.pathname.includes("continent")) {
      const allOffers = await getOffersByContinent(continentValue);
      setOffers(allOffers);
    } else {
      const countryOffers = await getOffersByCountry(countryId);
      setOffers(countryOffers);
    }
  }

  useEffect(() => {
    getAllOffers();
  }, []);

  return (
    <>
      <header className="headerOffers">
      <img
          className="photoHeader"
          src="/src/assets/images/headerOffers.png"
         
        ></img>
        <CountryList />
      </header>

      <div className="OfferList">
        {offers.map((offer, i) => (
          <OfferCard key={i} offer={offer} onAddToFavorites={() => handleAddToFavorites(offer)} />
        ))}
      </div>
    </>
  );
}
