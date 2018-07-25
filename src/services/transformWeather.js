import convert from 'convert-units';
import { CLOUDY, SUN, RAIN, SNOW, THUNDER, DRIZZLE } from '../constants/weathers'


const getTemp = kelvin => {
  return Number(convert(kelvin).from('K').to('C').toFixed(2));
};

const getWeatherState = weather => {
  const { id } = weather[0];
  switch(true){
    case (id < 300 ):
      return THUNDER;
    case (id < 400):
      return DRIZZLE;
    case (id < 600):
      return RAIN;
    case (id < 700):
      return SNOW;
    case(id === 800):
      return SUN;
    default:
      return CLOUDY;
  }
};

const transformWeather = weatherData => {
  const { weather } = weatherData;
  const { humidity, temp } = weatherData.main;
  const { speed } = weatherData.wind;
  const city = weatherData.name;
  const weatherState = getWeatherState(weather);
  const temperature = getTemp(temp);

  const data = {
    city,
    humidity,
    temperature,
    weatherState,
    wind: `${speed} m/s`
  };

  return data
};

export default transformWeather;