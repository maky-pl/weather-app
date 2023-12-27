import React from "react";

type CityWeatherDetailsProps = {
  data: any; // Replace 'any' with a more specific type if you have defined one
};

export const CityWeatherDetails: React.FC<CityWeatherDetailsProps> = ({
  data,
}) => {
  if (!data) return <div>Loading...</div>;

  const { city } = data;
  const sunriseTime = new Date(city.sunrise * 1000).toLocaleTimeString();
  const sunsetTime = new Date(city.sunset * 1000).toLocaleTimeString();

  return (
    <div>
      <h2>{city.name}</h2>
      <p>Population: {city.population}</p>
      <p>Sunrise: {sunriseTime}</p>
      <p>Sunset: {sunsetTime}</p>
    </div>
  );
};
