import React, { Component } from 'react';

import { Grid, Row, Jumbotron } from 'react-bootstrap';

class LandingPageSection extends Component {

  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Jumbotron>
              <h1>Hello, world! this is the {this.props.sections.title}</h1>
              <p>in this Web App you can post your Position</p>
            </Jumbotron>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default LandingPageSection;