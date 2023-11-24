import api from "./index";

export async function getUserContactInfo(userId) {
  const { data } = await api.get(`/user/${userId}/contactInfo`);
 
  return data.user;
}

export async function getMyFavorites(){
  const {data} = await api.get('/favorites/favorites', {
  
    headers: {authorization: localStorage.token}
  
  })
  console.log(data)
  return data
}

export async function addToFavorites(offer_id){
  const {data} = await api.post('/favorites', offer_id, {
    headers: {authorization: localStorage.token}
  })
  return data

}

export async function deleteFromFavorites(offer_id){
  const {data} = await api.delete('/favorites', offer_id, {
    headers: {authorization: localStorage.token}
  })
  return data
}