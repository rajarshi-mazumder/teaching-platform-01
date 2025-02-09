import axios from "axios";

export const serverApiClient = () =>
  axios.create({
    baseURL: `http://localhost:5000`,
    headers: {
      "Content-Type": "application/json",
    },
  });

// export default localApiClient;
