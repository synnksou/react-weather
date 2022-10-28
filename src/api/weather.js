import { get } from '.';
import { REACT_APP_API_KEY } from '../constants';

export const getWeatherLat = ({ lat, lon }) =>
  get(`forecast?lat=${lat}&lon=${lon}&appid=${REACT_APP_API_KEY}&lang=fr`);

export const getWeatherZipCode = ({ zipCode }) =>
  get(
    `weather?zip=${zipCode},FR&appid=${REACT_APP_API_KEY}&lang=fr&units=metric`,
  );

export const getForeCastZipCode = ({ zipCode }) =>
  get(`forecast?zip=${zipCode},FR&appid=${REACT_APP_API_KEY}&lang=fr`);
