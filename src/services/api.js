import axios from "axios";

const BACKEND_URL = `https://jsonplaceholder.typicode.com/`;
const REQUEST_TIMEOUT = 5000;

const HttpCode = {
  NOT_FOUND: 404,
  BAD_REQUEST: 400
};

export const createAPI = () => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;

    if (response.status === HttpCode.NOT_FOUND) {
      throw err;
    }

    if (response.status === HttpCode.BAD_REQUEST) {
      throw err;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
