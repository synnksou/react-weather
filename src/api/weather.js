import { get } from '.';

import { API_KEY } from '../constants';
export const getWeatherExemple = ({ params }) =>
  get(`weather&appid=${API_KEY}`, { params });
