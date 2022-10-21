import { get } from '.';
import { API_KEY } from '../constants';

export const getPollution = ({ lat, lon }) =>
  get(`air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=fr`);
