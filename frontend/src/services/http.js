import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_API_URL;

const http = {
  post: axios.post,
  delete: axios.delete,
  get: axios.get,
  put: axios.put,
};

export default http;
