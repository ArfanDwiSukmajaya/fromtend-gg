import axios from "axios";

const instance = axios.create({
  baseURL: "https://backend-gg.vercel.app/api/v1/",
  timeout: 5000,
});

const api = {
  get: (url) => instance.get(url),
  post: (url, data) => instance.post(url, data),
};

export default api;
