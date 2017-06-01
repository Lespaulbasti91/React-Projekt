import React, { Component } from 'react';
import { Grid, Row, Panel } from 'react-bootstrap';

class Footer extends Component {
  render() {
    return (
      <div className="app-footer">
        <Grid>
          <Row>
            <Panel>
              made for research only
            </Panel>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Footer;