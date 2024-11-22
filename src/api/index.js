import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = token;
  }
  return req;
});

export const login = (data) => API.post("/auth/login", data);
export const register = (data) => API.post("/auth/register", data);
export const fetchVocabulary = () => API.get("/vocabulary");
export const addVocabulary = (data) => API.post("/vocabulary", data);
export const deleteVocabulary = (id) => API.delete(`/vocabulary/${id}`);
export const fetchReviewWords = () => API.get("/vocabulary/review");

