import api from "./index";

export async function getAllCountries() {
  const { data } = await api.get("/country");
  return data;
}
