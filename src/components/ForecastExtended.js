import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ForecastExtended extends Component {
  render(){

    const { city } = this.props; // destructuring

    return (
      <div>
        <h2>Pronóstico Extendido para { city }</h2>
      </div>
    );
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired
};

export default ForecastExtended;