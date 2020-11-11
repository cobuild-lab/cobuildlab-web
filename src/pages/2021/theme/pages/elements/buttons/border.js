import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const Border = () => (
  <section className="btn-section bg-light-inner agency">
    <Container className="margin-buttons">
      <Row>
        <Col xs="12">
          <div className="title title2 title-inner">
            <div className="main-title">
              <h2 className="font-primary borders text-center main-text text-uppercase m-b-0">
                <span>default border button </span>
              </h2>
            </div>
          </div>
        </Col>
        <Col xs="12">
          <div className="text-center">
            <a className="btn btn-default primary-btn back-white" href="#">
              default
            </a>
            <a className="btn btn-default primary-btn success back-white" href="#">
              success
            </a>
            <a className="btn btn-default primary-btn info back-white" href="#">
              info
            </a>
            <a className="btn btn-default primary-btn warning back-white" href="#">
              warning
            </a>
            <a className="btn btn-default primary-btn danger back-white" href="#">
              danger
            </a>
            <a className="btn btn-default primary-btn light back-white" href="#">
              light
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Border;
