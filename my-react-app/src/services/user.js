import api from "./index";

export async function getUserContactInfo() {
  const { data } = await api.get("/user/user_id/contactInfo");
  return data;
}
