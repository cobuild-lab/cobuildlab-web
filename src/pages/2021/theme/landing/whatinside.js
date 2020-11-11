import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const WhatInSide = () => (
  <section className="whatinside" id="whatinside">
    <Container>
      <div className="position-relative o-hidden">
        <div className="title">
          <h2>What's inside Unice </h2>
          <p>Unice is ready with tons of demos and elements which is perfect for your project</p>
          <hr className="bottom-border" />
        </div>
      </div>
      <Row>
        <Col md="4" sm="6">
          <div className="inside_box">
            <h3>13+ Home layout</h3>
            <p>Creative layout for you</p>
          </div>
        </Col>
        <Col md="4" sm="6">
          <div className="inside_box">
            <h3>25+ Blog Layout</h3>
            <p>theme included 25 plus attractive layouts</p>
          </div>
        </Col>
        <Col md="4" sm="6">
          <div className="inside_box">
            <h3>20+ Feature pages</h3>
            <p>All Feature pages added with theme</p>
          </div>
        </Col>

        <Col md="4" sm="6">
          <div className="inside_box">
            <h3>30+ Portfolio layouts</h3>
            <p>30 plus layouts added for show you portfolio</p>
          </div>
        </Col>
        <Col md="4" sm="6">
          <div className="inside_box">
            <h3>11+ Extra pages</h3>
            <p>11 extra bones pages added</p>
          </div>
        </Col>
        <Col md="4" sm="6">
          <div className="inside_box">
            <h3>25+ Elements</h3>
            <p>Yes, theme included 25 unique elements</p>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default WhatInSide;
