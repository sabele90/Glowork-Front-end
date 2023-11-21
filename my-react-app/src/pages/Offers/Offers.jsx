import OfferCard from "../../components/OfferCard/OfferCard";
import "./Offers.css";
import { useEffect, useState } from "react";
import { getOffersByContinent } from "../../services/offer";
import React from "react";
import { useParams } from "react-router-dom";

export default function Offers() {
  const [offers, setOffers] = useState([]);
  const { countryValue } = useParams({});

  async function getAllOffers() {
    const allOffers = await getOffersByContinent(countryValue);
    setOffers(allOffers);
  }

  function showAllOffers() {
    return offers.map((offer, i) => {
      return <OfferCard key={i} offer={offer} />;
    });
  }
  useEffect(() => {
    getAllOffers();
  }, []);
  return showAllOffers();
}
