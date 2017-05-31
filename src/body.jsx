import React, { Component } from 'react';

import BodySections from './body-sections';

class Body extends Component {
  render() {
    return (
      <div className="app-body">
       <BodySections/>
      </div>
    );
  }
}

export default Body;