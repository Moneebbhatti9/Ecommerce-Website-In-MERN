import axios from "axios";
import jwtDecode from "jwt-decode";

const API_BASE_URL = "http://localhost:5000/api/user";
const token = localStorage.getItem("token");

const jwtAxios = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

const setAuthToken = (token) => {
  if (token) {
    jwtAxios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete jwtAxios.defaults.headers.common["Authorization"];
  }
};

const isTokenExpired = (token) => {
  try {
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return decoded.exp < currentTime;
  } catch (error) {
    return true;
  }
};

export { jwtAxios, setAuthToken, isTokenExpired };
