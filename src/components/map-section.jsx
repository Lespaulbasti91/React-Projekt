import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Grid, Row, Panel, Button } from 'react-bootstrap';
import { Map, Marker, InfoWindow } from 'google-maps-react'

const ARC_DE_TRIOMPHE_POSITION = {
  lat: 48.873947,
  lng: 2.295038
};

const EIFFEL_TOWER_POSITION = {
  lat: 48.858608,
  lng: 2.294471
};


export default class MapSection extends Component {

  constructor() {
    super();

    this.goToArc =this.goToArc.bind(this);
  }

  componentDidMount() {

  }

  renderMap() {
    const { lat, lng } = this.props.initialPosition;

    this.map = new google.maps.Map(this.refs.map, {
      center: {
        lat: lat,
        lng: lng
      },
      zoom: 16
    });
  }

  goToArc() {
    this.map.panTo(ARC_DE_TRIOMPHE_POSITION);
  }

  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Panel>
              <div id="map">
                <Map
                  google={ window.google }
                  zoom={14}>
                  <Marker
                    title={'The marker`s title will appear as a tooltip.'}
                    name={'SOMA'}
                    position={{ lat: 37.778519, lng: -122.405640 }}
                  />
                </Map>
              </div>
            </Panel>
          </Row>
        </Grid>s
      </div>
    );
  }
}

MapSection.propTypes = {
  google: React.PropTypes.object,
  zoom: React.PropTypes.number,
  initialCenter: React.PropTypes.object
};

MapSection.defaultProps = {
  zoom: 13,
  // San Francisco, by default
  initialCenter: {
    lat: 51.06737519999999,
    lng: 13.754957699999977
  }
}
