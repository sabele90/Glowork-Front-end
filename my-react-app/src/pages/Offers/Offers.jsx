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

  async function handleAddToFavorites(offer) {
    console.log(offer);
    // Verificar si la oferta ya está en favoritos, me compara los id de la offer
    const isOfferInFavorites = favoriteOffers.filter(
      (favOffer) => favOffer.id === offer.offer_id
    );
    console.log(favoriteOffers);
    console.log(isOfferInFavorites);
    // SI NO ESTA,  HACEMOS UN SET PARA CAMBIAR EL ESTADO, Y ME LA AGREGA
    // ACEPTA UN NUEVO VALOR DE ESTADO QUE RECIBE EL ESTADO ANTERIOR Y ME DEVUELVE EL NUEVO.
    //prevFavorites es el estado anterior, que es la lista actual de ofertas favoritas.
    //(...prevFavorites, { offer }) crea un nuevo array que incluye todas
    // las ofertas anteriores (...prevFavorites) y agrega la nueva oferta { offer } al final del array.
    //Luego, ese nuevo array se convierte en el nuevo estado de favoriteOffers,
    //y React se encarga de actualizar el componente para reflejar el cambio en el estado
    if (!isOfferInFavorites) {
      setFavoriteOffers((prevFavorites) => [...prevFavorites, { offer }]);
    }
  }

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
          <OfferCard
            key={i}
            offer={offer}
            onAddToFavorites={() => handleAddToFavorites(offer)}
          />
        ))}
      </div>
    </>
  );
}
