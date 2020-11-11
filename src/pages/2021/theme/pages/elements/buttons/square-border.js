import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const SquareBorder = () => (
  <section className="btn-section bg-light-inner agency">
    <Container className="margin-buttons">
      <Row>
        <Col xs="12">
          <div className="title title2 title-inner">
            <div className="main-title">
              <h2 className="font-primary borders text-center main-text text-uppercase m-b-0">
                <span>default square border button </span>
              </h2>
            </div>
          </div>
        </Col>
        <Col xs="12">
          <div className="text-center">
            <a className="btn btn-default primary-btn  radius-0 back-white" href="#">
              default
            </a>
            <a className="btn btn-default primary-btn success  radius-0 back-white" href="#">
              success
            </a>
            <a className="btn btn-default primary-btn info  radius-0 back-white" href="#">
              info
            </a>
            <a className="btn btn-default primary-btn warning  radius-0 back-white" href="#">
              warning
            </a>
            <a className="btn btn-default primary-btn danger  radius-0 back-white" href="#">
              danger
            </a>
            <a className="btn btn-default primary-btn light  radius-0 back-white" href="#">
              light
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default SquareBorder;
