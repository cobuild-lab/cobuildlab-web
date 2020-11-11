import React from 'react';
import Event1 from '../../../elements/event-schedule/event1';
import { Container, Row, Col } from 'reactstrap';
const Event = () => (
  <section className="yoga event bg img-1">
    <div className="animated-bg">
      <i></i>
      <i></i>
      <i></i>
    </div>
    <Container>
      <Row>
        <Col md="8" className="offset-md-2">
          <div className="title title2">
            <h2 className="text-white">event</h2>
            <img alt="" className="img-fluid" src="/assets/images/yoga-img/logo/bottom-curve.png" />
          </div>
        </Col>
        <Event1 />
      </Row>
    </Container>
  </section>
);
export default Event;
