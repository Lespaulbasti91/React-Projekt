import React, { Component } from 'react';
import { Grid, Row, PageHeader } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <div className="app-header">
        <Grid>
          <Row>
            <PageHeader>Geocaching <small>Webapp</small></PageHeader>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Header;