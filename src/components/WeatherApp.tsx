import React, { useState } from "react";
import { WeatherInfo } from "./WeatherInfo";
import { CityInput } from "./CityInput";

export const WeatherApp: React.FC = () => {
  const [city, setCity] = useState<string>("");

  return (
    <div>
      <CityInput setCity={setCity} />
      {city && <WeatherInfo city={city} />}
    </div>
  );
};
