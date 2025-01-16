import axios from "axios";

const apiClient = ({ port }) =>
  axios.create({
    baseURL: `http://localhost:${port}`,
    headers: {
      "Content-Type": "applicaiton/json",
    },
  });
export default apiClient;
