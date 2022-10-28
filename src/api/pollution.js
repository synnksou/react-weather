import { get } from '.';
import { REACT_APP_API_KEY } from '../constants';

export const getPollution = ({ lat, lon }) =>
  get(`air_pollution?lat=${lat}&lon=${lon}&appid=${REACT_APP_API_KEY}&lang=fr`);
