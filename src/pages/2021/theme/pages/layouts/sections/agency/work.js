import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const Work = () => (
  <section className="agency counter counter-bg">
    <Container>
      <Row>
        <Col md="3" xs="6" className="counter-container">
          <div className="counters hover-counter">
            <img
              alt=""
              className="img-fluid counter-img"
              src="/assets/images/agency/counter/1.png"
            />
            <div className="counter-text">
              <div className="count-number">
                <h2 className="counts text-center">2556</h2>
              </div>
              <div className="count-desc">
                <h5 className="text-center">days worked</h5>
              </div>
            </div>
          </div>
        </Col>
        <Col md="3" xs="6" className="counter-container">
          <div className="counters hover-counter active">
            <img
              alt=""
              className="img-fluid counter-img"
              src="/assets/images/agency/counter/2.png"
            />
            <div className="counter-text">
              <div className="count-number">
                <h2 className="counts text-center">306</h2>
              </div>
              <div className="count-desc">
                <h5 className="text-center">Project Finished</h5>
              </div>
            </div>
          </div>
        </Col>
        <Col md="3" xs="6" className="counter-container">
          <div className="counters hover-counter">
            <img
              alt=""
              className="img-fluid counter-img"
              src="/assets/images/agency/counter/3.png"
            />
            <div className="counter-text">
              <div className="count-number">
                <h2 className="counts text-center">485</h2>
              </div>
              <div className="count-desc">
                <h5 className="text-center">CofeeCoffee Cup</h5>
              </div>
            </div>
          </div>
        </Col>
        <Col md="3" xs="6" className="counter-container">
          <div className="counters hover-counter">
            <img
              alt=""
              className="img-fluid counter-img"
              src="/assets/images/agency/counter/4.png"
            />
            <div className="counter-text">
              <div className="count-number">
                <h2 className="counts text-center">568</h2>
              </div>
              <div className="count-desc">
                <h5 className="text-center">Happy Clients</h5>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Work;
