import React, { Component } from 'react';

import { Grid, Row, Col, Form, FormGroup, FormControl, ControlLabel, Panel, Button } from 'react-bootstrap';

import MapSection from './map-section';

class InputSection extends Component {
  constructor() {
    super();
    this.state = {
      coords: {},
    };
    this.success = this.success.bind(this);
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.success);
  }

  success(pos) {
    const crd = pos.coords;
    this.setState({ coords: crd });
  }

  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Panel>
            <Col xs={12} md={12}>
             <h2>In the following Form you can send your Position</h2>
            </Col>
            <Form>
              <Col xs={12} md={3}>
                <FormGroup>
                  <ControlLabel>Name</ControlLabel>
                  <FormControl type="text" placeholder="Jane Doe" />
                </FormGroup>
              </Col>
              <Col xs={12} md={3}>
                <FormGroup>
                  <ControlLabel>Street</ControlLabel>
                  <FormControl type="text"/>
                </FormGroup>
              </Col>
              <Col xs={12} md={3}>
                <FormGroup>
                  <ControlLabel>City</ControlLabel>
                  <FormControl type="text"/>
                </FormGroup>
              </Col>
              <Col xs={12} md={3}>
                <FormGroup>
                  <ControlLabel>Post Code</ControlLabel>
                  <FormControl type="text"/>
                </FormGroup>
              </Col>
              <Col xs={12} md={12}>
                <Button bsStyle="success" bsSize="large" type="submit">
                  Submit
                </Button>
              </Col>
            </Form>
            </Panel>
          </Row>
        </Grid>
        <MapSection initialCenter={{ lat: 51.041241, lng: 13.6977528 }} coords={ this.state.coords }/>
      </div>
    );
  }
}

export default InputSection;
