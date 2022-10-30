import axios from "axios";

const client = axios.create({
  baseURL: "https://movie5backend.herokuapp.com/api",
});

export default client;
