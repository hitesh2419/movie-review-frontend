import axios from "axios";

const client = axios.create({
  baseURL: "https://movie5backend.herokuapp.com/",
});

export default client;
