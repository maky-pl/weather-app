import React, { useEffect, useState } from "react";
import axios from "axios";
import { CityWeatherDetails } from "./CityWeatherDetails";
import { WeatherList } from "./WeatherList";

type WeatherInfoProps = {
  city: string;
};

export const WeatherInfo: React.FC<WeatherInfoProps> = ({ city }) => {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=XXX&units=metric&lang=pl`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching weather data", error);
      }
      setIsLoading(false);
    };

    if (city) {
      fetchData();
    }
  }, [city]);

  if (isLoading) return <div>Loading...</div>;
  if (!weatherData) return <div>No data available</div>;

  return (
    <>
      <div>
        <CityWeatherDetails data={weatherData} />
        <WeatherList list={weatherData.list} />
      </div>
    </>
  );
};
