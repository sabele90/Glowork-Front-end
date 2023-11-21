import api from "./index";

export async function getOffers() {
  const { data } = await api.get("/offer");
  return data
}

export async function getOffersByContinent(countryValue) {
  const { data } = await api.get("/offer");
  const dataFilterd = data.filter((offer)=> offer.company.continent_id == countryValue)
  console.log(data)
  console.log(dataFilterd)
return dataFilterd 
}


export async function getOneOffer(offerId) {
  const { data } = await api.get(`offer/${offerId}`);
  console.log(data)
return data
}


//sudamercia 4
//oceania 8,
//africa 7 
//europa 5 
//asia 1,
// norteamercia 2, 
//centroamerica 9,