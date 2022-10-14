import axios from 'axios';
import { camelizeKeys, decamelizeKeys } from 'humps';
import { API_BASE } from '../constants';
import { refreshToken } from './auth';
import canParam from 'can-param';

const api = axios.create({ baseURL: API_BASE });

const formatConfig = ({ params, ...opts } = {}) => ({
  ...opts,
  params: decamelizeKeys(params),
});

const isFormData = val =>
  typeof FormData !== 'undefined' && val instanceof FormData;

api.interceptors.request.use(config => {
  const accessToken = localStorage.getItem('accessToken');

  config.paramsSerializer = params => canParam(params);

  config.headers['Accept'] = 'application/json';

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

api.interceptors.response.use(
  response => response,
  error => {
    const originalRequest = error.config;
    const refreshTokenValue = localStorage.getItem('refreshToken');

    if (!error.response) {
      return Promise.reject(error);
    }

    if (originalRequest.url.indexOf('oauth/token') !== -1) {
      return Promise.reject(error);
    }

    if (error.response.status === 401 && originalRequest._hasBeenRetried) {
      localStorage.setItem('accessToken', '');
      localStorage.setItem('refreshToken', '');
      window.location.reload();
    } else if (
      error.response.status === 401 &&
      !originalRequest._hasBeenRetried &&
      Boolean(refreshTokenValue)
    ) {
      originalRequest._hasBeenRetried = true;

      return refreshToken({ refreshToken: refreshTokenValue }).then(
        ({ data }) => {
          const { accessToken, refreshToken } = data;
          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('refreshToken', refreshToken);
          originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
          return axios(originalRequest);
        },
        err => {
          localStorage.setItem('accessToken', '');
          localStorage.setItem('refreshToken', '');
          window.location.reload();
        },
      );
    }

    return Promise.reject(error);
  },
);

const formatResponse = response => {
  if (!Boolean(response)) {
    return response;
  }

  return camelizeKeys(response);
};

export const get = (uri, config = {}) =>
  api.get(uri, formatConfig(config)).then(formatResponse);

export const post = (uri, payload = {}, config) =>
  api.post(uri, payload, formatConfig(config)).then(formatResponse);

export const put = (uri, payload = {}, config) =>
  api.put(uri, payload, formatConfig(config)).then(formatResponse);

export const destroy = (uri, config) =>
  api.delete(uri, formatConfig(config)).then(formatResponse);
