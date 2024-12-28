import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    "Content-Type": "applicaiton/json",
  },
});
export default apiClient;
