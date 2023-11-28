import api from "./index";

export async function getReviews() {
    const { data } = await api.get("/review");
    return data;
  }
  //background: radial-gradient(circle, #2196f3, #64b5f6, #1976d2)