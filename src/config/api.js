import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 2000,
});

const api = {
  get: (url) => instance.get(url),
  post: (url, data) => instance.post(url, data),
};

export default api;
