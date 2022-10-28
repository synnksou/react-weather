import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { getPollution } from '../../api/pollution';
import PollutionCard from './PollutionCard';

const Pollution = () => {
  const [zipCode, setZipCode] = useState('59000');
  const [error, setError] = useState(null);

  const { data: pollution, refetch } = useQuery(
    'pollution',
    () =>
      getPollution({
        zipCode: zipCode,
      }),
    {
      onSucces: () => setError(null),
      onError: error => {
        setError(error);
      },
    },
  );

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
          <button type="text" className="btn btn-primary" onClick={refetch}>
            Rechercher
          </button>
        </div>

        <div className="max-w-md">
          {pollution && <PollutionCard pollution={pollution} />}
        </div>
      </div>
    </div>
  );
};

export default Pollution;
