import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

// se puede recibir directamente la propiedad city sin pasar por una variable intermedia
const Location = ({ city }) => (
	//const { city } = city;  Destructuring ecmascript => const city = props.city
	// Cuando la variable destino se llama igual que la propiedad, se puede evitar la redundancia
	<div className="locationCont">
		<h1>
			{ city }
		</h1>
	</div>
);

Location.propTypes = {
	city: PropTypes.string.isRequired
};
export default Location;