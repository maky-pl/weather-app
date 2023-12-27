import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

type WeatherData = {
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  dt_txt: string;
};

type WeatherListProps = {
  list: WeatherData[];
};

const groupByDate = (list: WeatherData[]) => {
  const groupedData: { [key: string]: WeatherData[] } = {};

  list.forEach((item) => {
    const date = new Date(item.dt_txt).toLocaleDateString();
    if (!groupedData[date]) {
      groupedData[date] = [];
    }
    groupedData[date].push(item);
  });

  return groupedData;
};

export const WeatherList: React.FC<WeatherListProps> = ({ list }) => {
  const groupedData = groupByDate(list);

  const filteredTimes = ["03:00:00", "09:00:00", "15:00:00", "21:00:00"];

  return (
    <div style={{ padding: "20px" }}>
      {Object.keys(groupedData).map((date) => (
        <div key={date} style={{ marginBottom: "30px" }}>
          <Typography variant="h6" component="div" gutterBottom>
            {date}
          </Typography>
          <Grid container spacing={2}>
            {groupedData[date]
              .filter((item) =>
                filteredTimes.includes(
                  new Date(item.dt_txt).toLocaleTimeString()
                )
              )
              .map((item, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <Card
                    raised
                    style={{ minWidth: 275, maxWidth: 300, margin: "auto" }}
                  >
                    <CardContent>
                      <Typography variant="body2" component="p">
                        Time: {new Date(item.dt_txt).toLocaleTimeString()}
                        <br />
                        Temperature: {item.main.temp} °C
                        <br />
                        Feels Like: {item.main.feels_like} °C
                        <br />
                        Min Temperature: {item.main.temp_min} °C
                        <br />
                        Max Temperature: {item.main.temp_max} °C
                        <br />
                        Pressure: {item.main.pressure} hPa
                        <br />
                        Sea Level: {item.main.sea_level} hPa
                        <br />
                        Ground Level: {item.main.grnd_level} hPa
                        <br />
                        Humidity: {item.main.humidity}%
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </div>
      ))}
    </div>
  );
};
