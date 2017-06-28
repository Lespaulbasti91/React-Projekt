import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Grid, Row, Panel, Button } from 'react-bootstrap';
import { Map, Marker, InfoWindow } from 'google-maps-react';

export default class MapSection extends Component {

  constructor() {
    super();
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
    this.onMouseoverMarker = this.onMouseoverMarker.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }

  onMouseoverMarker(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  }

  onMapClicked(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  }

  render() {
    const { latitude, longitude } = this.props.coords;
    return (
      <div>
        <Grid>
          <Row>
            <Panel>
              <div id="map">
                <Map
                  onClick={this.onMapClicked}
                  google={ window.google }
                  zoom={13}
                  initialCenter={this.props.initialCenter}
                >
                  <Marker
                    onMouseover={this.onMouseoverMarker}
                    name={'current Position'}
                    position={{
                      lat: latitude,
                      lng: longitude,
                    }}
                  />
                  <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}>
                    <div>
                      <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                  </InfoWindow>
                 </Map>
              </div>
            </Panel>
          </Row>
        </Grid>
      </div>
    );
  }
}

MapSection.propTypes = {
  google: PropTypes.object,
  zoom: PropTypes.number,
  initialCenter: PropTypes.object,
  coords: PropTypes.object,
};
