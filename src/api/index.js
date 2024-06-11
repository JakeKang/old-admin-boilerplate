import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const instance = axios.create({
  baseURL: API_URL,
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

const useApi = (url) => {
  const get = async () => {
    return await instance.get(url);
  };
  const create = async (value) => {
    return await instance.post(url, value);
  };
  const update = async (id, value) => {
    return await instance.put(`${url}/${id}`, value);
  };
  const remove = async (id) => {
    return instance.delete(`${url}/${id}`);
  };

  return { get, create, update, remove };
};

export { instance, useApi, API_URL };
