import axios from "axios";

export const localApiClient = ({ port }) =>
  axios.create({
    baseURL: `http://localhost:${port}`,
    headers: {
      "Content-Type": "applicaiton/json",
    },
  });

export const serverApiClient = () =>
  axios.create({
    baseURL: `http://localhost:5000`,
    headers: {
      "Content-Type": "applicaiton/json",
    },
  });

// export default localApiClient;
