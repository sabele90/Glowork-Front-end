import api from "./index";

export async function getOffers() {
  const { data } = await api.get("/offer");
  return data;
}

export async function getOffersByContinent(continentValue) {
  const { data } = await api.get("/offer");
  const dataFilterd = data.filter(
    (offer) => offer.company.continent_id == continentValue
  );
  return dataFilterd;
}

export async function getOffersByCountry(countryId) {
  const { data } = await api.get("/offer");
  const dataFilterd = data.filter(
    (offer) => offer.company.country_id === parseInt(countryId)
  );
  return dataFilterd;
}

export async function getOneOffer(offerId) {
  const { data } = await api.get(`offer/${offerId}`);
  return data;
}
