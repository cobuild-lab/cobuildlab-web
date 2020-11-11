import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const Deault = () => (
  <section className="btn-section agency">
    <Container className="margin-buttons">
      <Row>
        <Col xs="12">
          <div className="title title2 title-inner">
            <div className="main-title">
              <h2 className="font-primary borders text-center main-text text-uppercase m-b-0">
                <span>default button</span>
              </h2>
            </div>
          </div>
        </Col>
        <Col xs="12">
          <div className="text-center">
            <a className="btn btn-default primary-btn" href="#">
              default
            </a>
            <a className="btn btn-default primary-btn success" href="#">
              success
            </a>
            <a className="btn btn-default primary-btn info" href="#">
              info
            </a>
            <a className="btn btn-default primary-btn warning" href="#">
              warning
            </a>
            <a className="btn btn-default primary-btn danger" href="#">
              danger
            </a>
            <a className="btn btn-default primary-btn light" href="#">
              light
            </a>
            <a className="btn btn-default btn-gradient" href="#">
              gradient
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Deault;
