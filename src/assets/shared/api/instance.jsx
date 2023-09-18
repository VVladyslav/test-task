import axios from "axios";

const { API_URL } = process.env;

const instance = axios.create({
  baseURL: API_URL,
});

export default instance;
