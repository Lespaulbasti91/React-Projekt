import React, { Component } from 'react';

import { Grid, Row, Panel } from 'react-bootstrap';

class MapSection extends Component {

  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Panel>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2507.2259705190563!2d13.75276901529035!3d51.06737855060133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4709cf3c72c98bdb%3A0xe4bfdd3a7136ec99!2se-fork!5e0!3m2!1sde!2sde!4v1496342584540" width="100%"></iframe>
            </Panel>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default MapSection;