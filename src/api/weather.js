import { get } from '.';
import { API_KEY } from '../constants';

export const getWeatherLat = ({ lat, lon }) =>
  get(`forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=fr`);

export const getWeatherZipCode = ({ zipCode }) =>
  get(`weather?zip=${zipCode},FR&appid=${API_KEY}&lang=fr&units=metric`);

export const getForeCastZipCode = ({ zipCode }) =>
  get(`forecast?zip=${zipCode},FR&appid=${API_KEY}&lang=fr`);
