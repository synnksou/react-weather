import axios from 'axios';
import { camelizeKeys, decamelizeKeys } from 'humps';
import { REACT_APP_API_BASE } from '../constants';
import canParam from 'can-param';

const api = axios.create({ baseURL: REACT_APP_API_BASE });

const formatConfig = ({ params, ...opts } = {}) => ({
  ...opts,
  params: decamelizeKeys(params),
});

const isFormData = val =>
  typeof FormData !== 'undefined' && val instanceof FormData;

api.interceptors.request.use(config => {
  const accessToken = localStorage.getItem('accessToken');

  config.paramsSerializer = params => canParam(params);

  if (Boolean(accessToken)) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }

  if (!isFormData(config.data)) {
    config.data = decamelizeKeys(config.data);
  } else {
    config.headers['Content-Type'] = 'multipart/form-data';
  }

  return config;
});

const formatResponse = response => {
  console.log({ response });
  if (!Boolean(response)) {
    return response;
  }

  return camelizeKeys(response.data);
};

export const get = (uri, config = {}) =>
  api.get(uri, formatConfig(config)).then(formatResponse);

export const post = (uri, payload = {}, config) =>
  api.post(uri, payload, formatConfig(config)).then(formatResponse);

export const put = (uri, payload = {}, config) =>
  api.put(uri, payload, formatConfig(config)).then(formatResponse);

export const destroy = (uri, config) =>
  api.delete(uri, formatConfig(config)).then(formatResponse);
