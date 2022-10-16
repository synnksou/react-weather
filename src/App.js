import { useQuery } from 'react-query';
import { getWeatherExemple } from './api/weather';
import './App.css';

const App = () => {
  //Exemple of useQuery
  const {
    data: weather,
    isLoading,
    error,
  } = useQuery('weather', () =>
    getWeatherExemple({
      lat: 50.633333,
      lon: 3.066667,
    }),
  );

  return <h1 className="text-3xl font-bold underline"> Hello world!</h1>;
};

export default App;
