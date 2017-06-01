import React, { Component } from 'react';

import myData from '../public/Data.json';

import BodySections from './body-sections';

class Body extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sections: myData.sectionData,
    };
  }
  render() {
    return (
      <div className="app-body">
        {this.state.sections.map((section, index) =>{
          return (<BodySections key={index} sections={section}/>);
        })}
      </div>
    );
  }
}

export default Body;
