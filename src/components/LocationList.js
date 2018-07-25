import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';

const LocationList = ({ cities }) => (
  <div>
    <WeatherLocation city={'Mérida, mx'} />
    <WeatherLocation city={'Ciudad de México, mx'} />
    <WeatherLocation city={'Cancún, mx'} />
    <WeatherLocation city={'Campeche, mx'} />
    <WeatherLocation city={'Chetumal, mx'} />
    <WeatherLocation city={'Playa del carmen, mx'} />
    <WeatherLocation city={'Buenos Aires, ar'} />
    <WeatherLocation city={'Bogotá, col'} />
    <WeatherLocation city={'Sao Paulo, br'} />
    <WeatherLocation city={'Barcelona, es'} />
  </div>
);

LocationList.propTypes = {
    cities: PropTypes.array.required
}

export default LocationList