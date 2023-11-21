import OfferCard from "../../components/OfferCard/OfferCard";
import "./Offers.css";
import { useEffect, useState } from "react";
import { getOffers, getOffersByContinent } from "../../services/offer";
import React from "react";
import { useParams } from "react-router-dom";

export default function Offers() {
  const [offers, setOffers] = useState([]);
  const { countryValue } = useParams();
  console.log(countryValue);
  async function getAllOffers() {
    const allOffers = await getOffersByContinent(countryValue);
    setOffers(allOffers);
  }

  useEffect(() => {
    getAllOffers();
  }, []);

  function showAllOffers() {
    return offers.map((offer, i) => <OfferCard key={i} offer={offer} />);
  }

  return showAllOffers();
}
