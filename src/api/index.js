import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://three144-lessonapplication-backend.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
