import api from "./index";

export async function getUserContactInfo(userId) {
  const { data } = await api.get(`/user/${userId}`);
  console.log(data);
  return data;
}
