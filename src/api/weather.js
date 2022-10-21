import { get } from '.';
import { API_KEY } from '../constants';

export const getWeatherExemple = ({ lat, lon }) => {
  get(`weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
};
