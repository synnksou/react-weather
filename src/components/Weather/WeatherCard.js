import Image from '../../images/temp.png';

const WeatherCard = ({ weather, favorite, handleAddFavorite }) => {
  return (
    <div className="shadow-xl card lg:card-normal w-96 bg-base-100 image-full">
      <figure>
        <img src={Image} alt="car!" />
      </figure>

      <div className="card-body">
        <h2 className="card-title">
          {weather.name} - {weather?.weather[0].description}
        </h2>
        {favorite !== weather.name && (
          <input
            type="radio"
            name="rating-3"
            className="bg-red-400 mask mask-heart"
          />
        )}

        <div className="flex flex-col">
          <span className="text-gray-500">Température</span>
          <span className="text-2xl font-bold">{weather.main.temp}°C</span>
        </div>

        <div className="flex flex-col">
          <span className="text-gray-500">Humidité</span>
          <span className="text-2xl font-bold">{weather.main.humidity}%</span>
        </div>

        <div className="flex flex-col">
          <span className="text-gray-500">Vent</span>
          <span className="text-2xl font-bold">{weather.wind.speed}km/h</span>
        </div>

        <div className="flex flex-col">
          <span className="text-gray-500">Température ressenti</span>
          <span className="text-2xl font-bold">{weather.main.temp}°C</span>
        </div>
        <div className="flex flex-col">
          <span className="text-gray-500">Température Max</span>
          <span className="text-2xl font-bold">{weather.main.tempMax}°C</span>
        </div>

        <div className="flex flex-col">
          <span className="text-gray-500">Température Min</span>
          <span className="text-2xl font-bold">{weather.main.tempMin}°C</span>
        </div>

        <div className="justify-end card-actions">
          <button className="btn btn-primary" onPress={handleAddFavorite}>
            Ajouter au Favoris
          </button>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
