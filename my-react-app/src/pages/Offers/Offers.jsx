import OfferCard from "../../components/OfferCard/OfferCard";
import "./Offers.css";
import { useEffect, useState } from "react";
import { getOffersByContinent, getOffersByCountry } from "../../services/offer";
import React from "react";
import { useParams } from "react-router-dom";


export default function Offers() {
  const [offers, setOffers] = useState([]);
  const { countryId, continentValue } = useParams();
  // COUNTRY NAME ES EL NOMBRE DEL PAIS TYPEOF STRING
  // COUNTRY VALUE SE RECIBE CLICKANDO EN EL MAPA Y ES EL CÓDIGO 
  // DEL CONTINENTE

  async function getAllOffers() {

    if (continentValue.length === 1) {
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
    <div>
      {offers.map((offer, i) => (
        <OfferCard key={i} offer={offer} />
      ))}
    
    </div>
  );
}


