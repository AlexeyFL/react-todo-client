import axios from 'axios';
const customFetch = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:4000',
});

export default customFetch;
