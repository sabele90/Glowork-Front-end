import api from "./index";

export async function login(loginData) {
  const { data } = await api.post("/auth/login", loginData);
  return data;
}
