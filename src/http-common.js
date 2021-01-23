import axios from "axios";

export default axios.create({
  baseURL: (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? 'http://localhost:8090/api' : process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-type": "application/json"
  }
  
});