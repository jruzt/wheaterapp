import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';

import './App.css';


const cities = [
  'Mérida, mx',
  'Ciudad de México, mx',
  'Cancún, mx',
  'Campeche, mx',
  'Chetumal, mx',
  'Playa del carmen, mx',
  'Buenos Aires, ar',
  'Bogotá, col',
  'Sao Paulo, br',
  'Barcelona, es',
];

class App extends Component {

  constructor(){
    super();
    this.state = { city: null }
  }

  handleSelectedLocation = city => {
    this.setState({ city }); // es igual this.setState({ city: city }); ya que city es la variable del state (this.state.city) y también lo que viene de argumento, por eso es igual
    console.log('handleSelectedLocation');
  };

  render() {
    const { city } = this.state;
    return (
      <MuiThemeProvider>
        <Grid>

          <Row>
            <Col xs={12}>
            <AppBar title="Weather App"/>
            </Col>
          </Row>

          <Row>

            <Col xs={12} md={6}>
              <LocationList
                cities={cities}
                onSelectedLocation={this.handleSelectedLocation}>
              </LocationList>
            </Col>

            <Col xs={12} md={6}>
              <Paper zDepth={4}>
                <div className="detail">
                  { city && <ForecastExtended city={ city }/> }
                </div>
              </Paper>
            </Col>

          </Row>


        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
