import React, { Component } from 'react';

import LandingPageSection from './components/landig-section';
import MapSection from './components/map-section';
import InputSection from './components/input-section';

class BodySections extends Component {

  render() {
    switch (this.props.sections.typ) {
    case 'landingPage':
      return (
        <LandingPageSection sections={this.props.sections}/>
      );
    case 'inputSection':
      return (
        <InputSection sections={this.props.sections}/>
      );
    case 'mapSection':
      return (
        <MapSection sections={this.props.sections}/>
      );
    default:
      return false;
    }
  }
}

export default BodySections;
