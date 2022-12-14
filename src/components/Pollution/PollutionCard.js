const PollutionCard = ({ pollution }) => {
  return (
    <div className="shadow-xl card-side w-96 bg-base-100">
      <figure className="px-10 pt-10">
        <img
          src="https://placeimg.com/400/225/arch"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{pollution.name}</h2>
        <div class="stats stats-vertical lg:stats-horizontal shadow">
          <div className="flex flex-col">
            {/* <span className="text-gray-500">Température</span>
            <span className="text-2xl font-bold">{pollution.main.temp}°C</span> */}
            <div className="stat">
              <div className="stat-title">Température</div>
              <div className="stat-value">{pollution.main.temp}°C</div>
            </div>
          </div>
          <div className="flex flex-col">
            {/*   <span className="text-gray-500">Humidité</span>
            <span className="text-2xl font-bold">{pollution.main.humidity}%</span> */}

            <div className="stat">
              <div className="stat-title">Humidité</div>
              <div className="stat-value">{pollution.main.humidity}%</div>
            </div>
          </div>

          <div className="flex flex-col">
            {/* <span className="text-gray-500">Vent</span>
            <span className="text-2xl font-bold">{pollution.wind.speed}km/h</span> */}
            <div className="stat">
              <div className="stat-title">Vent</div>
              <div className="stat-value">{pollution.main.speed}km/h</div>
            </div>
          </div>
          <div className="card-actions" />
        </div>
      </div>
    </div>
  );
};

export default PollutionCard;
