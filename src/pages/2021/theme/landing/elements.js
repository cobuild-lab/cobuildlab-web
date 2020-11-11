import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const Elements = () => (
  <section className="elemant-bounce">
    <div className="elemant-back">
      <h1>extra bonus element</h1>
    </div>
    <Container>
      <Row>
        <Col xs="12">
          <div className="title">
            <h2>Element</h2>
            <h6>extra-bonus</h6>
            <hr className="bottom-border" />
          </div>
        </Col>
        <Col xs="12">
          <div className="elemant-bounce-contant">
            <img
              src="assets/images/landing/element/1.png"
              className="img-fluid"
              alt="element-img"
            />
          </div>
        </Col>
      </Row>
    </Container>
    <div className="animat-elimat">
      <img
        src="assets/images/landing/animate-icon/ract.png"
        className="img-fluid element-rect"
        alt=""
      />
      <img
        src="assets/images/landing/animate-icon/round-2.png"
        className="img-fluid element-round"
        alt=""
      />
      <img
        src="assets/images/landing/animate-icon/sib-1.png"
        className="img-fluid element-sib"
        alt=""
      />
      <img
        src="assets/images/landing/animate-icon/squar.png"
        className="img-fluid element-squar"
        alt=""
      />
    </div>
  </section>
);

export default Elements;
