import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { getWeatherZipCode } from '../../api/weather';
import { useLocalStorage } from '../../hook/useLocalStorage';
import WeatherCard from './WeatherCard';

const Weathers = () => {
  const [zipCode, setZipCode] = useState('59000');
  const [error, setError] = useState(null);
  const [favorite, setFavorite] = useLocalStorage('favorisZipCode', '');

  const { data, refetch } = useQuery(
    'weather',
    () =>
      getWeatherZipCode({
        zipCode: zipCode,
      }),
    {
      onSucces: () => setError(null),
      onError: error => {
        setError(error);
      },
    },
  );

  const handleAddFavorite = () => {
    setFavorite(zipCode);
  };

  console.log({ data });

  const handleSearch = () => {
    refetch();
  };

  return (
    <div className="min-h-screen hero bg-base-200">
      <div className="text-center hero-content">
        <div className="w-full">
          <input
            type="text"
            placeholder="Code postal"
            className="w-full max-w-xs my-6 input input-bordered input-primary"
            onChange={e => setZipCode(e.target.value)}
          />
          {error && (
            <div className="my-6 shadow-lg alert alert-error ">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 w-6 h-6 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Ville non trouvé</span>
              </div>
            </div>
          )}
          <button
            type="text"
            className="btn btn-primary"
            onClick={handleSearch}
          >
            Rechercher
          </button>
        </div>

        <div className="max-w-md">
          {data && (
            <WeatherCard
              weather={data}
              handleAddFavorite={handleAddFavorite}
              favorite={favorite}
            />
          )}
          {/*  <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button> */}
        </div>
      </div>
    </div>
  );
};

export default Weathers;
