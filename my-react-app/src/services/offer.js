import api from "./index";

export async function getOffers() {
  const { data } = await api.get("/offer");
  return data;
}

export async function getOffersByContinent(continentId) {
  const { data } = await api.get("/offer");
  console.log(data);
}
